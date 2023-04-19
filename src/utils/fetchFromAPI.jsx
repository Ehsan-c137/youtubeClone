import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
   params: {
      part: "snippet,id",
      regionCode: "US",
      maxResults: "50",
      order: "date",
   },
   headers: {
      "X-RapidAPI-Key": "349a6d2d03mshf1c74ea1a177a20p11d67djsn8ed15f9f9fc5",
      "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
   },
};

export const fetchFromAPI = async (url) => {
   const { data } = await axios.get(`${BASE_URL}/${url}`, options);
   return data;
};
