import { Mail, User, ShieldCheck } from "lucide-react";

interface Props {
  fullName: string;
  email: string;
  role: string;
}

export default function ProfileInformation({ fullName, email, role }: Props) {
  const info = [
    {
      label: "Full Name",
      value: fullName,
      icon: User,
    },
    {
      label: "Email Address",
      value: email,
      icon: Mail,
    },
    {
      label: "Account Role",
      value: role,
      icon: ShieldCheck,
    },
  ];

  return (
    <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
      <h2 className="text-xl font-bold text-slate-900">Account Information</h2>

      <div className="mt-6 space-y-5">
        {info.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.label}
              className="flex items-center gap-4 rounded-xl bg-slate-50 p-4"
            >
              <div className="rounded-lg bg-blue-100 p-3 text-blue-600">
                <Icon size={22} />
              </div>

              <div>
                <p className="text-sm text-slate-500">{item.label}</p>

                <p className="mt-1 font-semibold text-slate-900">
                  {item.value}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
