import React from "react";

interface FormCardProps {
  children: React.ReactNode;
}

export default function FormCard({ children }: FormCardProps) {
  return (
    <div className="w-full max-w-md p-8 rounded-2xl bg-slate-900/80 backdrop-blur-xl border border-white/10 shadow-[0_0_50px_0_rgba(99,102,241,0.15)] ring-1 ring-white/5 transition-all duration-300">
      {children}
    </div>
  );
}
