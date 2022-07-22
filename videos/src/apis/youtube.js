import axios from 'axios';

const KEY = "AIzaSyB3cLNGJikdFIRYhiV6xMgTsakQ7o6DpZI";

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
}); 