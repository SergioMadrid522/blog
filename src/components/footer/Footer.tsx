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

        <Links />

        <SocialMedia />
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
