import React from "react";
import { Link } from "react-router-dom";

import { CardContent, Box, CardMedia, Typography } from "@mui/material";
import { demoProfilePicture } from "../utils/constatns";
import { ContentPasteOffSharp } from "@mui/icons-material";

const ChannelCard = ({ channelDetail, marginTop }) => {
   return (
      <Box
         sx={{
            boxShadow: "none",
            borderRadius: "20px",
            marginTop: marginTop ?? "",
         }}
      >
         <Link to={`/channel/${channelDetail?.id}`}>
            <CardContent
               sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "#fff",
               }}
            >
               <CardMedia
                  sx={{
                     borderRadius: "50%",
                     objectFit: "cover",
                     height: "180px",
                     width: "180px",
                  }}
                  image={channelDetail?.snippet?.thumbnails?.high?.url}
                  alt={channelDetail?.snippet?.title}
                  component={CardContent}
               />
               <Typography variant="h6" sx={{ mt: 2 }}>
                  {channelDetail?.snippet?.title}
               </Typography>
            </CardContent>
         </Link>
      </Box>
   );
};

export default ChannelCard;
