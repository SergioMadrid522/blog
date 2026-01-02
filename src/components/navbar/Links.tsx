import { navbarLinks } from "@/data";
import Link from "next/link";

export default function Links() {
  return (
    <>
      {navbarLinks.map(({ label, pageUrl }) => (
        <Link
          key={label}
          href={pageUrl}
          className="hover:text-white focus:text-white transition-colors"
        >
          {label}
        </Link>
      ))}
    </>
  );
}
