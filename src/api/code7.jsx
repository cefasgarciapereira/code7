import axios from 'axios';

export default axios.create({
    baseURL: 'https://provadev.xlab.digital/api/v1/'
});

export const uuid = '?uuid=a99fc2e4-3cba-4588-abd3-e4069655deb6'