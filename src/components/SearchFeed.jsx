import React, { useEffect, useState } from "react";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { useParams } from "react-router-dom";
import Videos from "./Videos";

const SearchFeed = () => {
   const [videos, setVideos] = useState([]);
   const { searchTerm } = useParams();

   useEffect(() => {
      fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) =>
         setVideos(data.items)
      );
   }, [searchTerm]);

   return (
      <>
         <p className="text-white">search for: {searchTerm} videos</p>
         <Videos videos={videos} />
      </>
   );
};

export default SearchFeed;
