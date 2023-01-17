import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
  Box
} from "@mui/material";

const Repos = ({ repos, isLoading, isError }) => {
  return (
    <Box sx={{ padding: 5, paddingTop: 10 }}>
      <Grid container spacing={2}>
        {isLoading && <h4>Loading...</h4>}
        {repos?.length > 0 ? (
          repos.map((repo) => (
            <Grid item key={repo.id}>
              <Card sx={{ minWidth: 275, marginBottom: "10px" }}>
                <CardContent>
                  <Typography>{repo.name}</Typography>
                  <CardActions>
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noreferrer"
                      style={{ textDecoration: "none" }}
                    >
                      <Button variant="contained">View Details</Button>
                    </a>
                  </CardActions>
                </CardContent>
              </Card>
            </Grid>
          ))
        ) : (
          <Typography>This user has no repository</Typography>
        )}
      </Grid>
    </Box>
  );
};

export default Repos;
