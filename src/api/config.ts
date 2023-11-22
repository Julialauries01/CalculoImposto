import axios from "axios";

const server = axios.create({
   baseURL:'http://localhost:8080/api',
   headers: {
      'User-Agent': 'PostmanRuntime/7.33.0',
      Accept: '*/*',
      'Access-Control-Allow-Origin': '*',
   },

})

export default server