import { z } from 'zod'

export const analyzeSchema = z.object({
  age: z.number().positive(),
  gender: z.enum(['M', 'F']),
  weight: z.number().positive(),
  height: z.number().positive(),
  muac: z.number().positive()
})
