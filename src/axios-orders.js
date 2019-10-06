import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-app-ff8c2.firebaseio.com/'
});

export default instance;