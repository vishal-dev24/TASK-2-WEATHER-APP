const express = require('express');
const axios = require('axios');
const dotenv = require('dotenv');
const cors = require('cors');

const app = express();
require('dotenv').config(); // dotenv ko sabse upar hi import karein

const API_KEY = process.env.WEATHER_API_KEY;
app.use(express.json());
app.use(cors());

// Weather route
app.get('/weather', async (req, res) => {
    const { city } = req.query;
    if (!city) return res.status(400).json({ error: 'City is required' });
    try {
        const API_KEY = process.env.WEATHER_API_KEY; // Add this in your .env file
        const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
        );
        res.json(response.data);

    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch weather data' });
    }
});

app.listen(5000, () => console.log('server is on'));