require('dotenv').config()
const express = require('express')
const app = express()

const githubData = {
    "login": "AdarshJha-1",
    "id": 136787356,
    "node_id": "U_kgDOCCc1nA",
    "avatar_url": "https://avatars.githubusercontent.com/u/136787356?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/AdarshJha-1",
    "html_url": "https://github.com/AdarshJha-1",
    "followers_url": "https://api.github.com/users/AdarshJha-1/followers",
    "following_url": "https://api.github.com/users/AdarshJha-1/following{/other_user}",
    "gists_url": "https://api.github.com/users/AdarshJha-1/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/AdarshJha-1/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/AdarshJha-1/subscriptions",
    "organizations_url": "https://api.github.com/users/AdarshJha-1/orgs",
    "repos_url": "https://api.github.com/users/AdarshJha-1/repos",
    "events_url": "https://api.github.com/users/AdarshJha-1/events{/privacy}",
    "received_events_url": "https://api.github.com/users/AdarshJha-1/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Adarsh Jha",
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": "Passionate college student | Frontend and DevOps enthusiast | HTML, CSS, JavaScript, and Tailwind CSS | Familiar with Linux 🐧, CI/CD Pipeline 🔄, Git/GitHub 🌱",
    "twitter_username": null,
    "public_repos": 14,
    "public_gists": 0,
    "followers": 3,
    "following": 2,
    "created_at": "2023-06-16T06:27:57Z",
    "updated_at": "2023-11-23T06:21:27Z"
}

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/github', (req, res) => {
    res.json(githubData)
})

app.get('/twitter', (req, res) => {
    res.send('adarshjha__1')
})

app.get('/login', (req, res) => {
    res.send("<h1>Please login at My Website</h1>")
})

app.get('/youtube', (req, res) => {
    res.send('<h2>No YouTube -_-</h2>')
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`)
})
