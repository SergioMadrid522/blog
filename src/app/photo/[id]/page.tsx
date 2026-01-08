import RenderImage from "@/components/photoDetails/RenderImage";
import { gallery, GLOBAL } from "@/data";
import { PhotoDetailsProps } from "@/types";

import { notFound } from "next/navigation";

export default async function PhotoDetails({ params }: PhotoDetailsProps) {
  const { id } = await params;
  const photo = gallery.find((photo) => photo.id === Number(id));
  const { locationIcon } = GLOBAL;

  if (!photo) notFound();

  return (
    <main className="w-full px-4 md:px-8 py-22 bg-[#0a0a0a]">
      <section className="flex flex-wrap items-center justify-evenly gap-10">
        <RenderImage photo={photo} />

        <aside className="text-center">
          <h1 className="font-serif uppercase text-4xl md:text-5xl lg:text-6xl text-[#ededed] leading-[0.9] tracking-tight mb-6">
            {photo.title}
          </h1>

          <div className="flex items-center justify-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="#a3a3a3"
              viewBox="0 0 16 16"
            >
              <path d={locationIcon} />
            </svg>
            <p className="font-sans text-[20px] text-[#a3a3a3]">
              {photo.location}
            </p>
          </div>
        </aside>
      </section>
    </main>
  );
}
