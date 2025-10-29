import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';

const app = express();
app.use(cors({ origin: process.env.ALLOWED_ORIGIN }));
app.use(express.json());

app.get('/health', (req, res) => res.send('OK'));

app.get('/api/ping', (req, res) => res.json({ pong: true }));

app.get('/api/matches', async (req, res) => {
  try {
    const response = await fetch(`https://v3.football.api-sports.io/fixtures?league=39&season=2024`, {
      headers: { 'x-apisports-key': process.env.FOOTBALL_API_KEY }
    });
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch matches' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => console.log(`✅ Server running on port ${PORT}`));
