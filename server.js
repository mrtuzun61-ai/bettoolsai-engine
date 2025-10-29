import express from 'express';
import cors from 'cors';

const app = express();
const ALLOWED_ORIGIN = process.env.ALLOWED_ORIGIN || 'https://bettoolsai.com';

app.use(cors({ origin: ALLOWED_ORIGIN }));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('✅ BetToolsAI Engine is running');
});

app.get('/health', (req, res) => {
  res.json({ ok: true });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('Server running on port', PORT));
