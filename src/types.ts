import { StaticImageData } from "next/image";

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
  src: StaticImageData;
  title: string;
  location: string;
}
