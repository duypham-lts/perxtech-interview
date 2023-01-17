import "./App.css";
import { SearchUser } from "./pages/SearchUser.js/SearchUser";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import User from "./pages/User/User";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Box, IconButton } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { useMemo } from "react";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { setMode } from "./redux/state";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SearchUser />,
  },
  {
    path: "users/:username",
    element: <User />,
  },
]);

function App() {
  const dispatch = useDispatch();
  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: mode,
        },
      }),
    [mode]
  );

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Box sx={{ position: "fixed", right: "40px", top: "10px" }}>
          {theme.palette.mode} mode
          <IconButton
            color="inherit"
            onClick={() => dispatch(setMode(theme.palette.mode))}
          >
            {theme.palette.mode === "dark" ? (
              <Brightness7Icon />
            ) : (
              <Brightness4Icon />
            )}
          </IconButton>
        </Box>

        <CssBaseline />
        <RouterProvider router={router}>
          <SearchUser />
        </RouterProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
