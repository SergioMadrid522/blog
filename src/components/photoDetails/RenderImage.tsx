import { RenderImageProps } from "@/types";
import Image from "next/image";

export default function RenderImage({ photo }: RenderImageProps) {
  const verticalPhotos = [4, 5, 6];

  return (
    <>
      {verticalPhotos.includes(photo.id) ? (
        <div className="relative w-[550px] h-2x">
          <Image
            src={photo.src}
            alt={photo.title}
            className="object-cover rounded-xl w-full"
            priority
          />
        </div>
      ) : (
        <div className="relative w-2xl h-2xl">
          <Image
            src={photo.src}
            alt={photo.title}
            className="object-cover rounded-xl w-full"
            priority
          />
        </div>
      )}
    </>
  );
}
