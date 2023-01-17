import {
  Card,
  CardContent,
  Grid,
  Typography,
  Box,
} from "@mui/material";

const Orgs = ({ orgs, isLoading, isError }) => {
  return (
    <Box sx={{ padding: 5, paddingTop: 10 }}>
      <Grid container spacing={2}>
        {isLoading && <h4>Loading...</h4>}
        {orgs && orgs.length > 0 ? (
          orgs.map((org) => (
            <Grid item key={org.id}>
              <Card sx={{ minWidth: 275, marginBottom: "10px" }}>
                <CardContent>
                  <Typography>{org.name}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))
        ) : (
          <Typography>
            This user does not belong to any organizations or his/her organization
            does not public their members.
          </Typography>
        )}
      </Grid>
    </Box>
  );
};

export default Orgs;
