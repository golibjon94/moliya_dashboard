import React from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import { useStyles } from "./BodyComponent/BodyStyles";
export default function Footer() {
  const classes = useStyles();
  const date = new Date();

  return (
    <Box className={classes.footer}>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={6}>
          <Typography variant="body1" color="textSecondary" align="center">
            Barcha huquqlar himoyalangan. <br/> O'zbekiston Respublikasi Moliya Vazirligi{" "}
            {date.getFullYear()}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}></Grid>
      </Grid>
    </Box>
  );
}
