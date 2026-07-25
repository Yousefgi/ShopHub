import type { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  className?: string;
}

function Badge({ children, className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700 ${className}`}
    >
      {children}
    </span>
  );
}

export default Badge;
