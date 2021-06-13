import axios from "axios";

export default axios.create({
  baseURL: "http://api.openweathermap.org/data/2.5",
  params: {
    appid: "b201157d2845f79ad6e02f582e930d6f",
  },
});
