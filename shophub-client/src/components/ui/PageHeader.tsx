import type { ReactNode } from "react";

interface Props {
  title: string;
  description: string;
  action?: ReactNode;
}

export default function PageHeader({ title, description, action }: Props) {
  return (
    <div className="mb-8 flex items-center justify-between">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">{title}</h1>

        <p className="mt-2 text-slate-500">{description}</p>
      </div>

      {action}
    </div>
  );
}
