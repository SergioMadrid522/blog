import { socialMedia } from "@/data";
export default function SocialMedia() {
  return (
    <div className="flex flex-row items-center justify-center gap-5">
      {socialMedia.map(({ name, link, svgPath }) => (
        <a
          href={link}
          key={name}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visit Fabian's ${name} profile`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            fill="currentColor"
            viewBox="0 0 16 16"
            className="fill-[#ededed]"
          >
            <path d={svgPath} />
          </svg>
        </a>
      ))}
    </div>
  );
}
