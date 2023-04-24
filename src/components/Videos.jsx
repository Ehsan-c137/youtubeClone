import React from "react";
import { Stack, Box } from "@mui/material";
import { VideoCard, ChannelCard } from "./index";
import { BounceLoader } from "react-spinners";

const Videos = ({ videos, direction, justifyContent }) => {
   if (!videos)
      return (
         <Box
            sx={{
               display: "flex",
               justifyContent: "center",
               alignItems: "center",
               height: "70vh",
            }}
         >
            <BounceLoader color="red" />
         </Box>
      );
   return (
      <Stack
         direction={direction || "row"}
         flexWrap="wrap"
         justifyContent={justifyContent || "start"}
         gap={2}
      >
         {videos?.map((item, idx) => (
            <Box key={idx}>
               {item.id.channelId && <ChannelCard channelDetail={item} />}
               {item.id.videoId && <VideoCard video={item} />}
            </Box>
         ))}
      </Stack>
   );
};

export default Videos;
