import axios from 'axios'; 
axios.defaults.baseURL = 'http://192.168.31.98:3000';
axios.defaults.timeout = 30000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

export default axios;