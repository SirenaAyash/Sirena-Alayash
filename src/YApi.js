import axios from 'axios';
const KEY = 'AIzaSyC0X0rxBp9LcPxdu7-lKpxuJgb0TIfJzT0'; 

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 10,
        key: KEY
    }
})
