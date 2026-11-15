import { z } from "zod";

export const uploadValidation = z.object({
  title: z.string().trim().min(1),
  location: z.string().trim().min(1),
  src: z.string().trim().min(1),
  slug: z.string().trim().min(1),
  blurImgUrl: z.string().trim().min(1),
});
