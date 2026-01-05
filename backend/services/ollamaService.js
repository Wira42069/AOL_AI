export async function runOllama(prompt) {
    console.log("Reaching AI now")
  const res = await fetch('http://localhost:11434/api/generate', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      model: 'gemma-AI-AOL',
      prompt,
      stream: false
    })
  })

  const data = await res.json()
  console.log("Finished AI now")
  try {
    return JSON.parse(data.response)
  } catch {
    return { raw:data.response}
  }
}
