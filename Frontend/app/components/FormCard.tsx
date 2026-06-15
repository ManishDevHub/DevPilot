import React from "react";

interface FormCardProps {
  children: React.ReactNode;
}

export default function FormCard({ children }: FormCardProps) {
  return (
    <div className="glass-card max-w-lg mx-auto mt-12 p-8">
      {children}
    </div>
  );
}
