"use client";

import { useState } from "react";
import PickleballModal from "./PickleballModal";

export default function PickleballTrigger({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="underline decoration-dotted decoration-cyan-400/70 underline-offset-4 hover:text-cyan-300 transition"
        title="Psst — it's clickable"
      >
        {children}
      </button>
      <PickleballModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}
