import { quickLinks } from "@/data";
import Link from "next/link";

export default function Links() {
  return (
    <div className="flex flex-col items-center md:items-start gap-2">
      <p className="font-serif text-2xl text-[#ededed] mb-3 md:mb-3">
        Quick Links
      </p>
      <div className="flex flex-col gap-3 font-sans text-sm text-[#a3a3a3] text-center md:text-start">
        {quickLinks.map(({ label, pageUrl }) => (
          <Link
            key={label}
            href={pageUrl}
            className="hover:text-white transition-colors"
          >
            {label}
          </Link>
        ))}
      </div>
    </div>
  );
}
