import { z } from "zod";

/* Schema using zod to validate the body of the request */
export const createIssueSchema = z.object({
  title: z.string().min(1, "Title is required.").max(255),
  description: z.string().min(1, "Description is required"),
});
