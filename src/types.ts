import { StaticImageData } from "next/image";
import { z } from "zod";
import { uploadValidation } from "./app/api/photos/schema/upload";

export type Links = {
  label: string;
  pageUrl: string;
};

export interface SocialMedia {
  name: string;
  link: string;
  svgPath: string;
}

export type ModalProps = {
  isOpen: boolean;
  handleClick: () => void;
  username?: string | null;
};

export type LinkProps = {
  handleClick?: () => void;
  username?: string | null;
};

export interface Picture {
  id: number;
  slug: string;
  src: StaticImageData | string;
  title: string;
  location: string;
  blurimgurl?: string;
}

export type PhotoDetailsProps = {
  params: {
    slug: string;
  };
};

/* export interface RenderImageProps {
  photo: {
    id: number;
    src: StaticImageData | string;
    title: string;
  };
} */

export type Photo = {
  title: string;
  location: string;
  src: string;
  slug: string;
  blurImgUrl: string;
};

export type RenderImageProps = {
  slug: string;
};

export interface RouteContext {
  params: Promise<{ slug: string }>;
}
