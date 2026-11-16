import RenderImageClient from "@/components/photoDetails/RenderImageClient";
import type { PhotoDetailsProps } from "@/types";
import { notFound } from "next/navigation";

export default async function PhotoDetails({ params }: PhotoDetailsProps) {
  const { slug } = await params;

  if (!slug) {
    return notFound();
  }

  return <RenderImageClient slug={slug} />;
}
