import Axios from "axios";

const client = Axios.create({
  baseURL: "https://recruitment.dev.rollingglory.com/api/v2",
  headers:{
    'Content-Type': 'application/json',
  }
});

export default client;
