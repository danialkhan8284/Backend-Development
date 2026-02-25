require('dotenv').config();
const express = require("express");
const app = express();


const githubData = 
    {
  "login": "danialkhan8284",
  "id": 193457604,
  "node_id": "U_kgDOC4ftxA",
  "avatar_url": "https://avatars.githubusercontent.com/u/193457604?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/danialkhan8284",
  "html_url": "https://github.com/danialkhan8284",
  "followers_url": "https://api.github.com/users/danialkhan8284/followers",
  "following_url": "https://api.github.com/users/danialkhan8284/following{/other_user}",
  "gists_url": "https://api.github.com/users/danialkhan8284/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/danialkhan8284/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/danialkhan8284/subscriptions",
  "organizations_url": "https://api.github.com/users/danialkhan8284/orgs",
  "repos_url": "https://api.github.com/users/danialkhan8284/repos",
  "events_url": "https://api.github.com/users/danialkhan8284/events{/privacy}",
  "received_events_url": "https://api.github.com/users/danialkhan8284/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": null,
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 5,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2025-01-02T04:45:27Z",
  "updated_at": "2025-06-24T13:02:00Z"
};



app.get("/", (req, res) => {
    res.send("hello i am Danial khan");
});

app.get("/github", (req, res) => {
    res.json(githubData);
});

app.listen(process.env.PORT, () => {
    console.log(`Server listening on port ${process.env.PORT}`);
});