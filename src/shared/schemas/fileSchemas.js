// src/shared/schemas/fileSchema.js
import { z } from "zod";


const ACCCEPTED_TYPES = [
    "image/jpeg",
    "image/jpg",
    "image/png",
    "image/webp",
    "application/pdf"
];
const MAX_SIZE = 10* 1024 * 1024; //10MB

export const fileSchema = z.object({
    files: z
        .array(
            z
                .instanceof(File)
                .refine((f) => ACCCEPTED_TYPES.includes(f.type), "tipeinvalido")
                .refine((f) => f.sizes <= MAX_SIZE, "max 10MD"),
        )
        .min(1, "Requerido")
        .max(12, "Max 12 archivos")
});