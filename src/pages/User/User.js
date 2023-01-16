import { Menu, MenuItem, MenuList } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const User = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
      }}
    >
      <Box sx={{ minWidth: "300px", backgroundColor: "whitesmoke" }}>
        <MenuList>
          <MenuItem>Repository</MenuItem>
          <MenuItem>Organization</MenuItem>
        </MenuList>
      </Box>
      <Box sx={{ flex: 1 }}>main</Box>
    </Box>
  );
};

export default User;
