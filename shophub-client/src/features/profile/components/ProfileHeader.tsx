import { User } from "lucide-react";

interface Props {
  fullName: string;
  email: string;
  role: string;
}

export default function ProfileHeader({ fullName, email, role }: Props) {
  return (
    <div className="overflow-hidden rounded-3xl bg-linear-to-r from-blue-600 to-indigo-600 text-white shadow-lg">
      {/* Cover */}
      <div className="h-32 bg-white/10" />

      <div className="-mt-12 px-8 pb-8">
        {/* Avatar */}
        <div className="flex h-24 w-24 items-center justify-center rounded-full border-4 border-white bg-white text-blue-600 shadow-md">
          <User size={45} />
        </div>

        <div className="mt-5">
          <h1 className="text-3xl font-bold">{fullName}</h1>

          <p className="mt-2 text-blue-100">{email}</p>

          <div className="mt-4">
            <span className="rounded-full bg-white/20 px-4 py-2 text-sm font-medium">
              {role}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
