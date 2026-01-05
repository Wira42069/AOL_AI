import express from 'express'
import cors from 'cors'
import analyzeRoute from './routes/analyze.js'

const app = express()

app.use(cors())
app.use(express.json())

app.use('/api/analyze', analyzeRoute)

app.listen(3001, () => {
  console.log('Backend running on http://localhost:3001')
})
