import Link from "next/link";

export default function SeeDetailsLink({ slug }: { slug: string }) {
  console.log(slug);
  return (
    <div
      className="
        absolute inset-0
        flex items-center justify-center
        w-full h-full
        bg-black/44 md:bg-black/50
        opacity-100 md:opacity-0
        md:group-hover:opacity-100
        transition-opacity duration-200"
    >
      <Link
        href={`/photo/${slug}`}
        className="font-sans font-bold text-2xl md:text-xl"
      >
        See Details
      </Link>
    </div>
  );
}
