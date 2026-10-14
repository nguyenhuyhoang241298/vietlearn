import { z } from 'zod'

const schema = z.object({
  VITE_API_URL: z.string().url().default('http://localhost:3000'),
})

export const env = schema.parse(import.meta.env)
