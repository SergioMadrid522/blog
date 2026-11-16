import Image from "next/image";
import SocialMedia from "@/components/footer/SocialMedia";

export default function About() {
  return (
    <main
      className="
      flex flex-col 
      lg:flex-row 
      max-w-[80%] 
      md:max-w-[95%] 
      mx-auto
      min-h-screen 
      py-24 md:py-28 
      gap-10 md:gap-16
    "
    >
      <div className="flex items-center justify-center w-full">
        <Image
          src="https://res.cloudinary.com/dlhd0iosj/image/upload/v1794784216/46CE5E94-80B8-46C9-B785-C84378105B9E_1_105_c_gt0uv9.jpg"
          alt="Photo of Fabian"
          priority
          width={768}
          height={1024}
          sizes="(min-width: 1024px) 500px, 400px"
          className="rounded-[10px] w-[400px] md:w-[500px] object-cover"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAKCAYAAACJxx+AAAAA+klEQVR4AVSQO8qDUBCFT25eEBICIdiKjZUrsXAn7sZNWNsLliKooGJhpfisRLDwff//3i7FMDAz38w5Q+q6plmW0TRNeS7LkkZRRC3LoqZpUjLPM9Z1xTRNPPq+R1EUOI4Dy7KAXC4XfD4fvF4vnE4nxHGM+/2Ofd+xbRtI27YYxxHP5xOu6yIMQ04ymm0muq7DMAw4joMkSZDn+e+AqqqQJIkXb7cb2ElKKc/X6xVEURSIoojv9wtZluH7PqqqAmsyLYSpZgSjbdvGMAx8W9M0OJ/PIEwgIQTMrud5XPnj8UDXdfj/CYggCNw/s6VpGrfMgPf7jSAI8AcAAP//U+wMpwAAAAZJREFUAwDuG5thOLET6wAAAABJRU5ErkJggg=="
        />
      </div>

      <div className="flex flex-col items-center lg:items-start justify-center p-5">
        <p className="font-serif uppercase italic text-5xl lg:text-[85px] text-[#c2bbac] text-center lg:text-left leading-tight mb-6">
          the vision behind the lens
        </p>

        <p className="text-[18px] py-3 max-w-xl text-center lg:text-left">
          Photography is not just about capturing light; it&apos;s about
          capturing silence. I specialize in finding the quiet elegance hidden
          within chaotic urban landscapes sceneries.
        </p>

        <p className="text-[18px] py-3 max-w-xl text-center lg:text-left">
          With a background in Software Engineering, I approach photography with
          both technical precision and artistic intuition. My goal is to create
          images that make the world stand still, inviting the viewer to pause
          and breathe.
        </p>

        <div className="flex items-center justify-between mt-12 pt-8 w-full max-w-xl border-t border-white/10">
          <p className="font-serif text-5xl md:text-6xl text-[#ededed] opacity-90">
            Fabian.
          </p>

          <SocialMedia />
        </div>
      </div>
    </main>
  );
}
