// Simple proxy server to forward form submissions to Google Apps Script
require('dotenv').config();
const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const G_SCRIPT = process.env.GOOGLE_SCRIPT_URL || 'https://script.google.com/macros/s/AKfycbykuTqrNMIMkY3FlMXGPZapdWGU0e1Rf5o9EYs9d_Yrr7izYDG_kR9TL1Im1UkKcbzxEA/exec';

app.post('/apply', async (req, res) => {
  try {
    // Forward as application/x-www-form-urlencoded to avoid Apps Script CORS issues
    const params = new URLSearchParams();
    const payload = { ...req.body };
    Object.entries(payload).forEach(([k, v]) => params.append(k, v == null ? '' : String(v)));

    const response = await axios.post(G_SCRIPT, params.toString(), {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' },
      timeout: 10000,
    });

    res.status(response.status).send(response.data);
  } catch (err) {
    console.error('Proxy error:', err.message || err);
    if (err.response) {
      res.status(err.response.status).send(err.response.data);
    } else {
      res.status(500).send({ error: 'Proxy request failed', details: err.message });
    }
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log('Proxy listening on', PORT));
