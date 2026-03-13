type StatusBadgeProps = {
  status: "已附來源" | "尚待確認" | "有異議";
};

export default function StatusBadge({ status }: StatusBadgeProps) {
  const className =
    status === "有異議"
      ? "bg-red-100 text-red-700"
      : status === "已附來源"
      ? "bg-emerald-100 text-emerald-700"
      : "bg-neutral-100 text-neutral-600";

  return (
    <span className={`rounded-full px-3 py-1 text-xs ${className}`}>
      {status}
    </span>
  );
}