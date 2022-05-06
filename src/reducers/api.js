import axios from 'axios';

export default axios.create({
    baseURL:`https://redlandriver-api.herokuapp.com/api/`,
// baseURL: `http://localhost:3001/api/`,
});