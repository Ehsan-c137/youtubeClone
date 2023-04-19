import React from "react";
import { Stack } from "@mui/material";
import { logo } from "../utils/constatns";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

const Navbar = () => {
   return (
      <Stack
         sx={{
            display: "flex",
            position: "sticky",
            p: 1,
            background: "#000",
            justifyContent: "space-between",
         }}
         direction="row"
      >
         <Link to="/" className="flex items-center">
            <img src={logo} alt="logo" width={45} className="h-45" />
         </Link>

         <SearchBar />
      </Stack>
   );
};

export default Navbar;
