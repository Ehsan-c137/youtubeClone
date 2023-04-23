import React from "react";
import { categories } from "../utils/constatns";
import { Stack, Box } from "@mui/material";
import classes from "./Sidebar.module.css";

const Sidebar = ({ selectedCategory, setSelectedCategory }) => {
   return (
      <Stack
         direction="row"
         sx={{
            overflowY: "auto",
            height: { sx: "auto", md: "85vh" },

            flexDirection: { md: "column" },
         }}
      >
         {categories.map((category, i) => (
            <button
               key={`${category} + ${i}`}
               className={classes.category_btn}
               onClick={() => setSelectedCategory(category.name)}
               style={{
                  backgroundColor:
                     category.name == selectedCategory && "#FC1503",
                  color: "white",
               }}
            >
               <span className="text-white mr-4">{category.icon}</span>
               <span className="text-white">{category.name}</span>
            </button>
         ))}
      </Stack>
   );
};

export default Sidebar;
