
const express = require('express');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 8000;
app.get('/api/jokes/random', async (req, res) => {
    try {
        const response = await axios.get('https://official-joke-api.appspot.com/random_joke');
        const joke = `${response.data.setup} ${response.data.punchline}`;
        res.json({ joke });
    } catch (error) {
        console.error("Error fetching random joke:", error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
    res.json({ joke });
});

app.get('/api/images/random', async (req, res) => {
    try {

        const response = await axios.get(`https://api.unsplash.com/photos/random?client_id=${accessKey}`);
        const image = response.data.urls.regular;

        res.json({ image });
    } catch (error) {
        console.error("Error fetching random image:", error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


app.get('/api/jokes-and-images/random', async (req, res) => {
    try {
        // Logic to fetch random joke
        try {
            const response = await axios.get('https://official-joke-api.appspot.com/random_joke');
            const joke = `${response.data.setup} ${response.data.punchline}`;
            res.json({ joke });
        } catch (error) {
            console.error("Error fetching random joke:", error);
            res.status(500).json({ error: 'Internal Server Error' });
        }

        // Logic to fetch random image
        const response = await axios.get(`https://api.unsplash.com/photos/random?client_id=${accessKey}`);
        const image = response.data.urls.regular;

        // Combining joke and image
        const combinedData = { joke, image };

        res.json(combinedData);
    } catch (error) {
        console.error("Error fetching random joke or image:", error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
