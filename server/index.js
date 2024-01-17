//requiring env
require('dotenv').config()

//require module syntax
const express = require('express')

//or
// import express from 'express';

const app = express()

//listening to a port
const port = process.env.PORT || 5000


//json object
const githubData =
{
    "login": "bishakhne0gi",
    "id": 50258639,
    "node_id": "MDQ6VXNlcjUwMjU4NjM5",
    "avatar_url": "https://avatars.githubusercontent.com/u/50258639?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/bishakhne0gi",
    "html_url": "https://github.com/bishakhne0gi",
    "followers_url": "https://api.github.com/users/bishakhne0gi/followers",
    "following_url": "https://api.github.com/users/bishakhne0gi/following{/other_user}",
    "gists_url": "https://api.github.com/users/bishakhne0gi/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/bishakhne0gi/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/bishakhne0gi/subscriptions",
    "organizations_url": "https://api.github.com/users/bishakhne0gi/orgs",
    "repos_url": "https://api.github.com/users/bishakhne0gi/repos",
    "events_url": "https://api.github.com/users/bishakhne0gi/events{/privacy}",
    "received_events_url": "https://api.github.com/users/bishakhne0gi/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Bishakh Neogi",
    "company": null,
    "blog": "https://www.linkedin.com/in/bishakh-neogi-387815205/",
    "location": "KOLKATA",
    "email": null,
    "hireable": null,
    "bio": "I am a final-year CSE undergrad. I dump here all my projects and problems I come across in my coding journey.",
    "twitter_username": null,
    "public_repos": 35,
    "public_gists": 0,
    "followers": 55,
    "following": 14,
    "created_at": "2019-05-04T05:59:27Z",
    "updated_at": "2023-11-03T10:40:20Z"
}

//getting the data at '/github'
app.get('/github', (req, res) => {

    //sending the json data
    res.json(githubData);
})

//getting the request at '/' with a callback
app.get('/', (req, res) => {

    //sending response at '/'
    res.send('Hello World!')
})

app.get('/fb', (req, res) => {

    //sending a string
    res.send('Hello Fb');
})



app.get('/login', (req, res) => {


    //sending a h1 tag
    res.send('<h1>Please Login</h1>');
})


//listening the response at the port given above
app.listen(port, () => {
    console.log(`Server is running at : http://localhost:${port}`)
})

