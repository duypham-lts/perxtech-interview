import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const UserNotFound = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Typography variant="h3">User not found!</Typography>
        <Button
          sx={{ marginTop: "10px", alignSelf: "center" }}
          variant="contained"
          onClick={() => navigate("/")}
        >
          Back to home
        </Button>
      </Box>
    </Box>
  );
};

export default UserNotFound;
