import type { LucideIcon } from "lucide-react";

interface Props {
  title: string;
  value: string | number;
  icon: LucideIcon;
  color?: "blue" | "green" | "purple" | "orange";
}

const colors = {
  blue: {
    bg: "bg-blue-100",
    text: "text-blue-600",
  },
  green: {
    bg: "bg-green-100",
    text: "text-green-600",
  },
  purple: {
    bg: "bg-purple-100",
    text: "text-purple-600",
  },
  orange: {
    bg: "bg-orange-100",
    text: "text-orange-600",
  },
};

export default function StatsCard({
  title,
  value,
  icon: Icon,
  color = "blue",
}: Props) {
  const theme = colors[color];

  return (
    <div className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-slate-500">{title}</p>

          <h2 className="mt-3 text-4xl font-bold text-slate-900">{value}</h2>

          <p className="mt-2 text-sm text-slate-400">Updated just now</p>
        </div>

        <div
          className={`rounded-2xl p-4 ${theme.bg} transition-transform duration-300 group-hover:scale-110`}
        >
          <Icon size={28} className={theme.text} />
        </div>
      </div>
    </div>
  );
}
