import { useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import "./App.css";
import { useNavigate } from "react-router-dom";

function App() {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSearchUser = () => {
    if (name) {
      navigate(`/users/${name}`);
    }
  };

  return (
    <div className="App">
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <TextField
          variant="outlined"
          label="Github Username"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Button
          variant="contained"
          sx={{ marginLeft: "10px" }}
          onClick={handleSearchUser}
        >
          Search
        </Button>
      </Box>
    </div>
  );
}

export default App;
