import type { ReactNode } from "react";

interface EmptyStateProps {
  title: string;
  description: string;
  icon?: ReactNode;
}

function EmptyState({ title, description, icon }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-slate-50 px-6 py-16 text-center">
      {icon && <div className="mb-5 text-slate-400">{icon}</div>}

      <h3 className="text-xl font-semibold text-slate-900">{title}</h3>

      <p className="mt-2 max-w-md text-slate-500">{description}</p>
    </div>
  );
}

export default EmptyState;
