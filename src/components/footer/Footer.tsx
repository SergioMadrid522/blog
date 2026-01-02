import { quickLinks, socialMedia } from "@/data";
import Link from "next/link";

export default function Footer() {
  //bg-[#0a0a0a]
  return (
    <footer>
      <section
        className="
            flex flex-col md:flex-row
            items-center md:items-start
            justify-between md:justify-evenly
            gap-10
            px-3 py-8
        "
      >
        <div className="text-center md:text-start">
          <h2
            className="
                font-serif uppercase
                text-4xl md:text-5xl lg:text-6xl text-[#ededed]
                leading-[0.9] tracking-tight mb-6
            "
          >
            fabian
            <br />
            photography
          </h2>
          <p className="font-sans text-[#a3a3a3] text-sm max-w">
            Capturing the world&apos;s silent moments.
          </p>
        </div>

        <div className="flex flex-col items-center md:items-start gap-2">
          <p className="font-serif text-2xl text-[#ededed] mb-3 md:mb-3">
            Quick Links
          </p>
          <div className="flex flex-col gap-3 font-sans text-sm text-[#a3a3a3]">
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

        <div className="">
          <p className="font-serif text-2xl text-[#ededed] mb-3 md:mb-3">
            Follow me
          </p>

          <div className="flex flex-row items-center justify-center gap-5">
            {socialMedia.map(({ name, link, svgPath }) => (
              <a
                href={link}
                key={name}
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  className="fill-[#ededed]"
                >
                  <path d={svgPath} />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </section>
      <section className="border-t border-t-white/20">
        <div className="text-center p-5">
          <p className="text-[15px] text-[#edededbb]">
            © 2025 Fabian Photography. All rights reserved.
          </p>
        </div>
      </section>
    </footer>
  );
}
