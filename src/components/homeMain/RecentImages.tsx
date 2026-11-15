import { breakpointColumnsObj } from "@/data";

import Masonry from "react-masonry-css";
import Image from "next/image";
import SeeDetailsLink from "../utils/SeeDetailsLink";
import { recentPictures } from "@/data.gallery";

export default function RecentImages() {
  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="flex gap-4"
      columnClassName="flex flex-col gap-4"
    >
      {recentPictures.map(({ id, src, title, slug, blurimgurl }) => (
        <div key={id} className="group relative overflow-hidden">
          <Image
            src={src}
            alt={title}
            className="rounded-xl w-full"
            width={1200}
            height={800}
            placeholder="blur"
            blurDataURL={blurimgurl}
          />

          <SeeDetailsLink slug={slug} />
        </div>
      ))}
    </Masonry>
  );
}
