import axios from 'axios';

// making an instance of axios so i don't have to include the beggining of the url
// will append the baseURL to the different requests/fetch urls
const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
});

export default instance;