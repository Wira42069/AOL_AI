const express = require('express');
const { exec } = require('child_process');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(bodyParser.json());

// 1. Initiate Ollama Server automatically when backend starts
exec('ollama serve', (err) => {
    if (err) {
        console.log("Ollama server is already running or requires manual start.");
    } else {
        console.log("Ollama server initiated successfully.");
    }
});

// 2. The API Endpoint for your React Frontend
app.post('/api/ask', async (req, res) => {
    const userPrompt = req.body.prompt;

    // We define a system prompt using your specific DB schema 
    // to ensure "segmented subformats" in the response.
    const systemInstruction = `
        You are an assistant for a database with these tables:
        - MsProduct (pID, pName, Category, Price)
        - MsCustomer (cID, cName, cPhonenumber)
        - MsHeader (hID, cID, orderDate)
        - MsTransaction (hID, pID, Quantity)
        
        Always return your answer in three segments:
        SEGMENT 1: THOUGHTS (Logic used)
        SEGMENT 2: DATA (The raw details)
        SEGMENT 3: ACTION (Suggested next step)
    `;

    try {
        const response = await fetch('http://localhost:11434/api/generate', {
            method: 'POST',
            body: JSON.stringify({
                model: 'llama3', // Ensure you have pulled this model via 'ollama pull llama3'
                prompt: `${systemInstruction}\n\nUser Question: ${userPrompt}`,
                stream: false,
            }),
        });

        const data = await response.json();
        res.json({ output: data.response });
        
    } catch (error) {
        res.status(500).json({ error: "Failed to connect to Ollama" });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});