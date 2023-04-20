import React from "react";
import { Link } from "react-router-dom";

import { CardContent, Box, CardMedia, Typography } from "@mui/material";
import { demoProfilePicture } from "../utils/constatns";

const ChannelCard = ({ channelDetail }) => {
   return (
      <Box
         sx={{
            boxShadow: "none",
            borderRadius: "20px",
         }}
      >
         <Link to={`/channel/${channelDetail?.id?.channelId}`}>
            <CardContent
               sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  textAlign: "center",
                  color: "#fff",
               }}
            >
               <CardMedia
                  image={
                     channelDetail?.snippet?.thumnails?.high?.url ||
                     demoProfilePicture
                  }
                  alt={channelDetail?.snippet?.title}
                  sx={{ borderRadius: "50%", heigth: "180px", width: "180px" }}
               />
               <Typography variant="h6">
                  {channelDetail?.snippet?.title}
               </Typography>
            </CardContent>
         </Link>
      </Box>
   );
};

export default ChannelCard;
