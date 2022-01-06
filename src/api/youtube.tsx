import axios, {AxiosResponse} from 'axios';

const key: String = "AIzaSyBdDG3avX6w2OCx4NKOjyeSZ8Aw2tnuc9I";

//Add playlistId when calling this.
export default axios.create({
    baseURL: 'https://youtube.googleapis.com/youtube/v3/playlistItems',
    params: {
        part: 'contentDetails',
        key: key
    },
    headers: {}
})