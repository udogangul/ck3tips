const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// API endpoint to get random tips
app.get('/api/tips', (req, res) => {
  fs.readFile(path.join(__dirname, 'tips.json'), 'utf8', (err, data) => {
    if (err) return res.status(500).json({ error: 'Failed to load tips.' });
    let tips = JSON.parse(data);
    // Shuffle tips
    tips = tips.sort(() => 0.5 - Math.random());
    res.json(tips.slice(0, 5)); // Return 5 random tips
  });
});

// Serve index.html for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
