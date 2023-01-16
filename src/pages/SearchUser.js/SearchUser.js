import { useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import { Outlet, useNavigate } from "react-router-dom";

export function SearchUser() {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSearchUser = (e) => {
    e.preventDefault();
    if (name) {
      navigate(`/users/${name}`);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
      component="form"
    >
      <TextField
        variant="outlined"
        label="Github Username"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Button
        variant="contained"
        sx={{ marginLeft: "10px" }}
        onClick={(e) => handleSearchUser(e)}
        type="submit"
      >
        Search
      </Button>
    </Box>
  );
}
