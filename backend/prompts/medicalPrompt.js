export function buildMedicalPrompt({ age, gender, weight, height, muac }) {
  return `
You are a medical assistant.

Patient data:
- Age: ${age}
- Gender: ${gender}
- Weight: ${weight} kg
- Height: ${height} cm
- MUAC: ${muac} cm

Return ONLY in valid JSON:

{
  "risk_level": "low | medium | high",
  "summary": "short explanation",
  "recommendation": "actionable advice"
}
`
}
