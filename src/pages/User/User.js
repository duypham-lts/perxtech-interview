import {
  Avatar,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import Orgs from "../../components/Orgs/Orgs";
import Repos from "../../components/Repos/Repos";
import octokit from "./../../octokit/octokit";
import { useParams, useSearchParams } from "react-router-dom";
import UserNotFound from "../../components/UserNotFound/UserNotFound";
import { useQuery } from "@tanstack/react-query";
import { getUserInfo } from "./../../apis/user.api";

const User = () => {
  let { username } = useParams();
  const [view, setView] = useState("repo");
  const [repoList, setRepoList] = useState([]);
  const [userInfo, setUserInfo] = useState(null);

  const getRepos = async () => {
    const res = await octokit.request(`GET /users/${username}/repos?page=2`);
    // console.log(res);
    if (res.status === 200) {
      setRepoList(res.data);
    }
  };

  const userInfoQuery = useQuery({
    queryKey: ["userInfo"],
    queryFn: () => getUserInfo(username),
  });

  console.log(userInfoQuery?.isError);

  // const getUserInfo = async () => {
  //   const res = await octokit.request(`GET /users/${username}`);
  //   if (res.status === 200) {
  //     setUserInfo(res.data);
  //   }
  // };

  useEffect(() => {
    getRepos();
    // getUserInfo();
    // eslint-disable-next-line
  }, [username]);

  if (userInfoQuery.isFetching) {
    return <h1>Loading...</h1>;
  } else if (userInfoQuery.isError) {
    return <UserNotFound />;
  } else if (userInfoQuery.data.data) {
    return (
      <Box sx={{ display: "flex" }}>
        <Box sx={{ width: "100%", maxWidth: 360, minHeight: "100vh" }}>
          <Box sx={{ display: "flex", alignItems: "center", padding: 2 }}>
            <Avatar
              src={userInfoQuery?.data?.data.avatar_url}
              sx={{ marginRight: 1 }}
            />
            <Typography sx={{ fontWeight: 600 }}>
              {userInfoQuery?.data?.data.login}
            </Typography>
          </Box>
          <List>
            <ListItem disablePadding>
              <ListItemButton onClick={() => setView("repo")}>
                <ListItemText primary="Repository" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton onClick={() => setView("org")}>
                <ListItemText primary="Organization" />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
        <main>
          {view === "repo" ? <Repos repoList={repoList} /> : <Orgs />}
        </main>
      </Box>
    );
  } 
};

export default User;
