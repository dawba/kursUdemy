import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID __Wgw58SZdU_uAweiPmyhH8z14JQ4r0sgFJfLPOb0Hw'
    }
});