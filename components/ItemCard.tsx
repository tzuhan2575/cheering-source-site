import Link from "next/link";

type ItemCardProps = {
  item: {
    id: string;
    creator: string;
    title: string;
    images: string[];
  };
};

export default function ItemCard({ item }: ItemCardProps) {
  return (
    <Link href={`/item/${item.id}`}>
      <article className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
        <div className="border-b border-neutral-100 px-4 py-3">
          <p className="font-medium text-neutral-900">{item.creator}</p>
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
