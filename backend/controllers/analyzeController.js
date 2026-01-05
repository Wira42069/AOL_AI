import { buildMedicalPrompt } from '../prompts/medicalPrompt.js'
import { runOllama } from '../services/ollamaService.js'
import { analyzeSchema } from '../validators/analyzeSchema.js'
import { parseJsonSafe } from '../utils/paresJsonSafe.js'

export async function analyze(req, res) {
  try {
    const input = analyzeSchema.parse(req.body)

    const prompt = buildMedicalPrompt(input)

    const aiText = await runOllama(prompt)

    const aiResult = parseJsonSafe(aiText)

    res.json(aiResult)
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
}
