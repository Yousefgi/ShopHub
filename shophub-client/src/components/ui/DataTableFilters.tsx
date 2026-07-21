import { Search, Filter } from "lucide-react";

import Input from "./Input";

interface Props {
  search: string;

  onSearchChange: (value: string) => void;

  placeholder?: string;

  status?: string;

  statusOptions?: string[];

  onStatusChange?: (value: string) => void;
}

export default function DataTableFilters({
  search,
  onSearchChange,
  placeholder = "Search...",
  status = "",
  statusOptions = [],
  onStatusChange,
}: Props) {
  return (
    <div className="mb-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
        {/* Search */}

        <div className="relative flex-1">
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <Input
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder={placeholder}
            className="pl-11"
          />
        </div>

        {/* Filter */}

        {statusOptions.length > 0 && onStatusChange && (
          <div className="relative min-w-55">
            <Filter
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <select
              value={status}
              onChange={(e) => onStatusChange(e.target.value)}
              className="
                h-12
                w-full
                rounded-xl
                border
                border-slate-300
                bg-white
                pl-11
                pr-4
                outline-none
                transition
                focus:border-blue-500
                focus:ring-4
                focus:ring-blue-100
              "
            >
              <option value="">All</option>

              {statusOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        )}
      </div>
    </div>
  );
}
