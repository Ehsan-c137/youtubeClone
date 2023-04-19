import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
const SearchBar = () => {
   const [inputValue, setInputValue] = useState("hello");
   return (
      <Paper
         component="form"
         onSubmit={() => {}}
         sx={{
            display: "flex",
            alignItems: "center",
            borderRadius: "20px",
            border: "1px solid #e3e3e3",
            pl: 2,
            pr: 1,
            boxShadow: "none",
            mr: { sm: 5 },
         }}
      >
         <input
            type="text"
            className="search-bar outline-none"
            placeholder="Search..."
            value={inputValue}
            onChange={() => {}}
         />
         <IconButton type="submit" sx={{ color: "red" }}>
            <SearchIcon />
         </IconButton>
      </Paper>
   );
};

export default SearchBar;
