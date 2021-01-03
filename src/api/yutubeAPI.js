import axios from "axios";

export const getVideoListByWord = (word, props) => {
    axios.post("/yuotube/api/search", {keyWord: word})
    .then(res => props.setVideoList(res.data.items))
    .catch(err =>  console.error(err));
}

export const getVideoById = (id, props) => {
    if (id !== null) {
        axios.post("/yuotube/api/video", {videoId: id})
        .then(res => props.setVideoId(res.data.items[0].id))
        .catch(err => console.error(err));
    }
}