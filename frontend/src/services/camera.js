import axios from 'axios';

const baseUrl = process.env.REACT_APP_API;


export default {
    sendPhoto: (data) => {
        const url = `${baseUrl}/send-document`;
        return axios.post(url, data);
    }
}