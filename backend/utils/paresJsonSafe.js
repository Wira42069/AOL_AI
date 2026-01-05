export function parseJsonSafe(input) {
  try {
    const text =
        typeof input === 'string'
            ? input
            : input?.raw
            

    const cleaned = String(text)
    .replace(/```json|```/g, '')
    .trim()

    return JSON.parse(cleaned)
  } catch {
    throw new Error('Invalid AI JSON response')
  }
}
