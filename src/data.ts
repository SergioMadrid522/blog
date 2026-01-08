import type { Links, SocialMedia, Picture } from "./types";
/* import images */
import img1 from "@/assets/images/img1.webp";
import img2 from "@/assets/images/img2.webp";
import img3 from "@/assets/images/img3.webp";
import img4 from "@/assets/images/img4.webp";
import img5 from "@/assets/images/img5.webp";
import img6 from "@/assets/images/img6.webp";
import img7 from "@/assets/images/img7.webp";
import img8 from "@/assets/images/img8.webp";
import img9 from "@/assets/images/img9.webp";
import img10 from "@/assets/images/img10.webp";
import img11 from "@/assets/images/img11.webp";
import img12 from "@/assets/images/img12.webp";
import img13 from "@/assets/images/img13.webp";
import img14 from "@/assets/images/img14.webp";
import img15 from "@/assets/images/img15.webp";
import img16 from "@/assets/images/img16.webp";

export const GLOBAL = {
  hamburgerIcon:
    "M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5",
  closeIcon:
    "M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z",
  chevronIcon:
    "M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708",
  locationIcon:
    "M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6",
};

export const navbarLinks: Links[] = [
  { label: "Portfolio", pageUrl: "/gallery" },
  { label: "About", pageUrl: "/about" },
  { label: "Contact", pageUrl: "#contact" },
];

export const quickLinks: Links[] = [
  { label: "Portfolio", pageUrl: "/gallery" },
  { label: "About me", pageUrl: "/about" },
  { label: "Contact", pageUrl: "#contact" },
];

export const socialMedia: SocialMedia[] = [
  {
    name: "Instagram",
    link: "https://www.instagram.com/fabian.1103",
    svgPath:
      "M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334",
  },
  {
    name: "Facebook",
    link: "",
    svgPath:
      "M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951",
  },
];

export const breakpointColumnsObj = {
  default: 4,
  1280: 3,
  768: 2,
  640: 1,
};

export const recentPictures: Picture[] = [
  { id: 1, src: img1, title: "Lost at Sea", location: "Altamira, Mexico" },
  { id: 2, src: img2, title: "The Observer", location: "Altamira, Mexico" },
  { id: 3, src: img3, title: "Last Light", location: "Altamira, Mexico" },
  { id: 4, src: img4, title: "Steel Skeleton", location: "Tampico, Mexico" },
  { id: 5, src: img5, title: "The Assembly", location: "Altamira, Mexico" },
  {
    id: 6,
    src: img6,
    title: "into the void",
    location: "Altamira, Mexico",
  },
  { id: 7, src: img7, title: "On Fire", location: "Altamira, Mexico" },
  { id: 8, src: img8, title: "Airbone", location: "Altamira, Mexico" },
  {
    id: 9,
    src: img9,
    title: "Forgotten Shores",
    location: "Altamira, Mexico",
  },
];

export const gallery: Picture[] = [
  { id: 1, src: img1, title: "Lost at Sea", location: "Altamira, Mexico" },
  { id: 2, src: img2, title: "The Observer", location: "Altamira, Mexico" },
  { id: 3, src: img3, title: "Last Light", location: "Altamira, Mexico" },
  { id: 4, src: img4, title: "Steel Skeleton", location: "Tampico, Mexico" },
  { id: 5, src: img5, title: "The Assembly", location: "Altamira, Mexico" },
  {
    id: 6,
    src: img6,
    title: "into the void",
    location: "Altamira, Mexico",
  },
  { id: 7, src: img7, title: "On Fire", location: "Altamira, Mexico" },
  { id: 8, src: img8, title: "Airbone", location: "Altamira, Mexico" },
  {
    id: 9,
    src: img9,
    title: "Forgotten Shores",
    location: "Altamira, Mexico",
  },
];
