import { Link } from "react-router-dom";
import { Package, Edit, LogOut } from "lucide-react";

import Button from "../../../components/ui/Button";

interface Props {
  onLogout: () => void;
  onEdit: () => void;
}
export default function ProfileActions({ onLogout, onEdit }: Props) {
  return (
    <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
      <h2 className="text-xl font-bold text-slate-900">Quick Actions</h2>

      <div className="mt-6 grid gap-4">
        <Link to="/orders">
          <Button className="flex w-full items-center justify-center gap-2 py-3">
            <Package size={20} />
            My Orders
          </Button>
        </Link>

        <Button
          variant="secondary"
          onClick={onEdit}
          className="flex w-full items-center justify-center gap-2 py-3"
        >
          <Edit size={20} />
          Edit Profile
        </Button>

        <Button
          variant="danger"
          onClick={onLogout}
          className="flex w-full items-center justify-center gap-2 py-3"
        >
          <LogOut size={20} />
          Logout
        </Button>
      </div>
    </div>
  );
}
