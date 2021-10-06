import axios from 'axios';

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3"
});
// so now we can directly do instance.get('/'); since we're starting with the baseURL

export default instance;