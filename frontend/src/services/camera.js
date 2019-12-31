import axios from 'axios';

const baseUrl = process.env.REACT_APP_API;


export default {
    sendPhoto: (data) => {
        const url = `${baseUrl}/api/v1/documents`;
        return axios.post(url, data);
    }
}