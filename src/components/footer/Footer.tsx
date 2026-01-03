import Links from "./Links";
import SocialMedia from "./SocialMedia";

export default function Footer() {
  return (
    <footer id="contact">
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

          <Links />
        </div>

        <div>
          <p className="font-serif text-2xl text-[#ededed] mb-3 md:mb-3">
            Follow me
          </p>

          <SocialMedia />
        </div>
      </section>
      <section className="border-t border-t-white/20">
        <div className="text-center p-5">
          <p className="text-[15px] text-[#edededbb]">
            © 2026 Fabian Photography. All rights reserved.
          </p>
        </div>
      </section>
    </footer>
  );
}
