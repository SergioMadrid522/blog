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
};

export type LinkProps = {
  handleClick?: () => void;
};

export interface Picture {
  id: number;
  src: StaticImageData;
  title: string;
  location: string;
}
