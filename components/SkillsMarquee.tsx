"use client";

import { useEffect, useRef, useState } from "react";

export type Project = {
  id: string;
  title: string;
  clickable: boolean;
  href?: string;
};

export type Skill = {
  name: string;
  description: string;
  usedIn: string[];
};

export type SkillGroup = {
  group: string;
  items: Skill[];
};

type Active = {
  groupIdx: number;
  itemIdx: number;
  rect: DOMRect;
};

export default function SkillsMarquee({
  groups,
  projects,
}: {
  groups: SkillGroup[];
  projects: Project[];
}) {
  const [active, setActive] = useState<Active | null>(null);
  const popoverRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    const onDown = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (popoverRef.current && popoverRef.current.contains(t)) return;
      if (t.closest("[data-skill-pill]")) return;
      setActive(null);
    };
    const onScroll = () => setActive(null);
    window.addEventListener("keydown", onKey);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("scroll", onScroll, true);
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("scroll", onScroll, true);
      window.removeEventListener("resize", onScroll);
    };
  }, [active]);

  const activeSkill =
    active != null ? groups[active.groupIdx].items[active.itemIdx] : null;
  const activeProjects: Project[] = activeSkill
    ? (activeSkill.usedIn
        .map((id) => projects.find((p) => p.id === id))
        .filter(Boolean) as Project[])
    : [];

  // Position the popover in viewport coordinates, clamped to edges.
  // Computed in a layout effect so we never touch `window` during render.
  const POPOVER_W = 288;
  const POPOVER_MAX_H = 360;
  const [popoverStyle, setPopoverStyle] = useState<React.CSSProperties>({});
  useEffect(() => {
    if (!active) return;
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const centerX = active.rect.left + active.rect.width / 2;
    let left = centerX - POPOVER_W / 2;
    left = Math.max(12, Math.min(left, vw - POPOVER_W - 12));
    let top = active.rect.bottom + 12;
    if (top + POPOVER_MAX_H > vh - 12) {
      top = Math.max(12, active.rect.top - POPOVER_MAX_H - 12);
    }
    setPopoverStyle({ top, left, width: POPOVER_W });
  }, [active]);

  return (
    <div className="space-y-6">
      {groups.map((g, gIdx) => (
        <div key={g.group}>
          <div className="text-xs font-medium uppercase tracking-wide text-gray-400 mb-3">
            {g.group}
          </div>
          <div className="flex flex-wrap gap-2">
            {g.items.map((item, itemIdx) => {
              const isActive =
                active != null &&
                active.groupIdx === gIdx &&
                active.itemIdx === itemIdx;
              return (
                <button
                  key={item.name}
                  data-skill-pill
                  onClick={(e) => {
                    e.stopPropagation();
                    const rect = (
                      e.currentTarget as HTMLElement
                    ).getBoundingClientRect();
                    if (isActive) {
                      setActive(null);
                    } else {
                      setActive({ groupIdx: gIdx, itemIdx, rect });
                    }
                  }}
                  className={`skill-pill ${isActive ? "skill-pill-active" : ""}`}
                  type="button"
                >
                  {item.name}
                </button>
              );
            })}
          </div>
        </div>
      ))}

      {active && activeSkill && (
        <div
          ref={popoverRef}
          style={popoverStyle}
          className="fixed z-50 p-4 rounded-xl border border-gray-200 bg-white shadow-lg"
        >
          <div className="font-semibold text-gray-900 text-base mb-1">
            {activeSkill.name}
          </div>
          <p className="text-sm text-gray-600 leading-relaxed mb-3">
            {activeSkill.description}
          </p>
          {activeProjects.length > 0 ? (
            <>
              <div className="text-[10px] uppercase tracking-wide text-gray-400 mb-2">
                Used in
              </div>
              <div className="flex flex-wrap gap-1.5">
                {activeProjects.map((p) =>
                  p.clickable ? (
                    <a
                      key={p.id}
                      href={p.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs px-2 py-1 rounded-md bg-blue-50 border border-blue-200 text-blue-700 hover:bg-blue-100 transition"
                    >
                      {p.title} ↗
                    </a>
                  ) : (
                    <span
                      key={p.id}
                      className="text-xs px-2 py-1 rounded-md bg-gray-50 border border-gray-200 text-gray-600"
                    >
                      {p.title}
                    </span>
                  )
                )}
              </div>
            </>
          ) : (
            <div className="text-xs text-gray-400 italic">
              Foundational skill — not tied to a specific portfolio project.
            </div>
          )}
        </div>
      )}
    </div>
  );
}
