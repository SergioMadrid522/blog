import { z } from "zod";
import { uploadValidation } from "./schema/upload";

export type UploadValidation = z.infer<typeof uploadValidation>;
