import { ShieldCheck, Truck, Headphones, RotateCcw } from "lucide-react";

function TrustSection() {
  const items = [
    {
      icon: Truck,
      title: "Fast Delivery",
      description: "Quick and reliable shipping",
    },
    {
      icon: ShieldCheck,
      title: "Secure Payment",
      description: "Safe and protected transactions",
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Always here to help you",
    },
    {
      icon: RotateCcw,
      title: "Easy Returns",
      description: "Simple return process",
    },
  ];

  return (
    <section className="py-12">
      <div className="mx-auto grid max-w-7xl gap-6 px-6 md:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                <Icon size={28} />
              </div>

              <h3 className="mt-4 font-bold text-slate-900">{item.title}</h3>

              <p className="mt-2 text-sm text-slate-500">{item.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default TrustSection;
