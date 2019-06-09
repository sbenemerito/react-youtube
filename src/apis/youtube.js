import axios from 'axios';

const API_TOKEN = 'AIzaSyCKqvjNIl4zvlH6EvD_BdSYuo5rxt6xgx0';

const axiosInstance = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    key: API_TOKEN,
    part: 'snippet'
  }
});

export default axiosInstance;