import axios from "axios";

const instance = axios.create({

   baseUrl: 'http://localhost:5001/cln-b1e4c/us-central1/api'

});

export default instance;