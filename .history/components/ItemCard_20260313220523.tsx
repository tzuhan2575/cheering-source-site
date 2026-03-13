import Link from "next/link";
import StatusBadge from "./StatusBadge";

type ItemCardProps = {
  item: {
    id: string;
    creator: string;
    title: string;
    status: "已附來源" | "尚待確認" | "有異議";
    images: string[];
  };
};

export default function ItemCard({ item }: ItemCardProps) {
  return (
    <Link href={`/item/${item.id}`}>
      <article className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
        <div className="flex items-center justify-between border-b border-neutral-100 px-4 py-3">
          <p className="font-medium text-neutral-900">{item.creator}</p>
          <StatusBadge status={item.status} />
        </div>

        <div className="aspect-square w-full overflow-hidden bg-neutral-100">
          <img
            src={item.images[0]}
            alt={item.title}
            className="h-full w-full object-cover"
          />
        </div>
      </article>
    </Link>
  );
}