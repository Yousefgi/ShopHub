interface Props {
  status: string;
}

export default function OrderStatusBadge({ status }: Props) {
  const styles: Record<string, string> = {
    Pending: "bg-yellow-100 text-yellow-800 border-yellow-200",

    Processing: "bg-blue-100 text-blue-800 border-blue-200",

    Shipped: "bg-purple-100 text-purple-800 border-purple-200",

    Delivered: "bg-green-100 text-green-800 border-green-200",

    Cancelled: "bg-red-100 text-red-800 border-red-200",
  };

  return (
    <span
      className={`
        inline-flex
        items-center
        rounded-full
        border
        px-3
        py-1
        text-xs
        font-semibold
        ${styles[status] ?? "bg-slate-100 text-slate-700 border-slate-200"}
      `}
    >
      {status}
    </span>
  );
}
