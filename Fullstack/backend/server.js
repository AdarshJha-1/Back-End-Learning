import express from 'express';

const app = express();

// app.get('/', (req, res) => {
//     res.send("Server is ready");
// });

// get a list of 5 jokes

app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            "id": 1,
            "title": "The Forgetful Fisherman",
            "content": "Why did the forgetful fisherman never succeed? Because he kept letting things off the hook!"
        },
        {
            "id": 2,
            "title": "The Musical Note",
            "content": "Why was the musical note always so happy? Because it found its key to happiness!"
        },
        {
            "id": 3,
            "title": "The Talking Clock",
            "content": "I bought a talking clock the other day. It said, 'You really need to manage your time better.' I haven't heard the end of it since!"
        },
        {
            "id": 4,
            "title": "The Vegetable Standoff",
            "content": "Why did the tomato turn red? Because it saw the salad dressing!"
        },
        {
            "id": 5,
            "title": "The Photocopier's Complaint",
            "content": "My photocopier doesn't work. I suspect it has a paper jam, but it's not my place to say."
        }
    ]
    res.send(jokes)
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server at http://localhost:${port}`);
})