import {
  Avatar,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import Orgs from "../../components/Orgs/Orgs";
import Repos from "../../components/Repos/Repos";
import { useParams } from "react-router-dom";
import UserNotFound from "../../components/UserNotFound/UserNotFound";
import { useQuery } from "@tanstack/react-query";
import { getUserInfo } from "./../../apis/user.api";
import { getRepoList } from "../../apis/repo.api";
import { getOrganizationList } from "../../apis/organization.api";

const User = () => {
  let { username } = useParams();
  const [view, setView] = useState("repo");

  const userInfoQuery = useQuery({
    queryKey: ["userInfo", username],
    queryFn: () => getUserInfo(username),
    retry: false,
  });

  const reposQuery = useQuery({
    queryKey: ["repos", username],
    queryFn: () => getRepoList(username),
    enabled: !!userInfoQuery?.data?.data,
    retry: false,
  });

  const orgsQuery = useQuery({
    queryKey: ["orgs", username],
    queryFn: () => getOrganizationList(username),
    enabled: !!userInfoQuery?.data?.data,
    retry: false,
  });

  return (
    <>
      {userInfoQuery.isLoading && <h1>Loading...</h1>}
      {userInfoQuery.isError && <UserNotFound />}
      {userInfoQuery.data && (
        <Box sx={{ display: "flex" }}>
          <Box
            sx={{
              width: "100%",
              maxWidth: 360,
              minHeight: "100vh",
              borderRight: "1px solid #C5C5C5",
            }}
          >
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
            {view === "repo" ? (
              <Repos
                repos={reposQuery?.data?.data}
                isLoading={reposQuery.isLoading}
                isError={reposQuery.isError}
              />
            ) : (
              <Orgs
                orgs={orgsQuery?.data?.data}
                isLoading={orgsQuery.isLoading}
                isError={orgsQuery.isError}
              />
            )}
          </main>
        </Box>
      )}
    </>
  );
};

export default User;
