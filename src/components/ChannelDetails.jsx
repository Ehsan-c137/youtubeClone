import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ChannelCard from "./ChannelCard";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import Videos from "./Videos";

const ChannelDetails = () => {
   const { id } = useParams();
   const [channelDetail, setChannelDetail] = useState();
   const [videos, setVideos] = useState([]);

   useEffect(() => {
      fetchFromAPI(`channels?part='snippet'&id=${id}`).then((data) =>
         setChannelDetail(data.items?.[0])
      );
      fetchFromAPI(`search?channelId=${id}&part=snippet&order=data`).then(
         (data) => setVideos(data?.items)
      );
   }, [id]);

   return (
      <Box sx={{ minHeight: "95vh" }}>
         <div
            style={{
               background:
                  "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)",
               zIndex: 10,
               height: "300px",
            }}
         ></div>
         <ChannelCard channelDetail={channelDetail} marginTop="-150px" />
         <Box sx={{ p: 4, textAlign: { md: "center" } }}>
            <Typography variant="subtitle" sx={{ color: "white" }}>
               {channelDetail?.brandingSettings?.channel?.description}
            </Typography>
         </Box>

         <Videos videos={videos} justifyContent="center" />
      </Box>
   );
};

export default ChannelDetails;
