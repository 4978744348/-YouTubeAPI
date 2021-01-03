const express = require("express")
const next = require("next")
const axios= require ("axios");

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== "production"
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
    const server = express()
    server.use(express.json());

    server.post("/yuotube/api/search", (req, res) => {
        return Promise.resolve(axios.get(`${process.env.YOUTUBE_BASE_URL}/search?part=snippet&q=${req.body.keyWord}&type=video&key=${process.env.YOUTUBE_API_KEY}`))
        .then((result) => res.status(200).send(result.data))
        .catch((err) => {
            console.error("LOG: /yuotube/api/search", err);
            res.status(err.response.status).json({error: err});
        })
    });

    server.post("/yuotube/api/video", (req, res) => {
        return Promise.resolve(axios.get(`${process.env.YOUTUBE_BASE_URL}/videos?part=snippet&id=${req.body.videoId}&key=${process.env.YOUTUBE_API_KEY}`))
        .then((result) => res.status(200).send(result.data))
        .catch((err) => {
            console.error("LOG: /yuotube/api/video", err);
            res.status(err.response.status).json({error: err});
        })
    });

    server.all("*", (req, res) => {
        return handle(req, res)
    })

    server.listen(port, (err) => {
        if (err) throw err
        console.log(`server run at http://localhost:${port}`)
    })
})