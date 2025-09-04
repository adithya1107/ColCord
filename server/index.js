// Simple proxy server to forward form submissions to Google Apps Script
require('dotenv').config();
const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const G_SCRIPT = 'https://script.google.com/macros/s/AKfycbxZsxo7Hgq0H1-96sJAW_kGxtnHVruWCVqXlvffNJ6dQjdrngnGtU5TQWcOIQ_rnW-Syw/exec';

// Log the Google Script URL being used (without exposing the full URL in production)
console.log('Using Google Script URL:', G_SCRIPT ? 'Configured' : 'Not configured');

app.post('/apply', async (req, res) => {
  try {
    console.log('Received application data:', req.body);
    
    // Google Script URL is hardcoded and should always be available

    // Forward as application/x-www-form-urlencoded to avoid Apps Script CORS issues
    const params = new URLSearchParams();
    const payload = { ...req.body };
    Object.entries(payload).forEach(([k, v]) => params.append(k, v == null ? '' : String(v)));

    console.log('Forwarding to Google Script:', G_SCRIPT);
    console.log('Payload:', params.toString());

    const response = await axios.post(G_SCRIPT, params.toString(), {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' },
      timeout: 15000,
    });

    console.log('Google Script response:', response.status, response.data);
    res.status(response.status).send(response.data);
  } catch (err) {
    console.error('Proxy error:', err.message || err);
    console.error('Error details:', err.response?.data || err.code);
    
    if (err.response) {
      res.status(err.response.status).send(err.response.data);
    } else if (err.code === 'ECONNREFUSED') {
      res.status(503).json({ 
        error: 'Service unavailable', 
        message: 'Unable to connect to Google Apps Script. Please try again later.' 
      });
    } else if (err.code === 'ETIMEDOUT') {
      res.status(504).json({ 
        error: 'Request timeout', 
        message: 'The request took too long to process. Please try again.' 
      });
    } else {
      res.status(500).json({ 
        error: 'Proxy request failed', 
        details: err.message,
        message: 'An unexpected error occurred. Please try again later.' 
      });
    }
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log('Proxy listening on', PORT));
