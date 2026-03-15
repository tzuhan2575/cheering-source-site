import Link from "next/link";

type ItemCardProps = {
  item: {
    id: string;
    creator: string;
    title: string;
    images: string[];
  };
  compact?: boolean;
};

export default function ItemCard({
  item,
  compact = false,
}: ItemCardProps) {
  return (
    <Link href={`/item/${item.id}`}>
      <article
        className={`overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md ${
          compact ? "rounded-xl" : ""
        }`}
      >
        <div
          className={`border-b border-neutral-100 ${
            compact ? "px-2 py-2" : "px-4 py-3"
          }`}
        >
          <p
            className={`font-medium text-neutral-900 ${
              compact ? "truncate text-xs" : "text-base"
            }`}
            title={item.creator}
          >
            {item.creator}
          </p>
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