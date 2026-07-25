import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function DashboardHeader() {
  return (
    <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          Admin Dashboard
        </h1>

        <p className="mt-2 text-slate-500">
          Manage your store and monitor performance.
        </p>
      </div>

      <Link
        to="/"
        className="
          inline-flex
          items-center
          justify-center
          gap-2
          rounded-xl
          border
          border-slate-200
          bg-white
          px-5
          py-2.5
          text-sm
          font-semibold
          text-slate-700
          shadow-sm
          transition-all
          hover:-translate-y-0.5
          hover:border-blue-200
          hover:bg-blue-50
          hover:text-blue-600
        "
      >
        <ArrowLeft size={18} />
        Back to Store
      </Link>
    </div>
  );
}
