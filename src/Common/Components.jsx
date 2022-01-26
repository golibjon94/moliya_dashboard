import { Grid, Typography } from "@material-ui/core";
import { useStyles } from "../Components/BodyComponent/BodyStyles";
import InfoSelect from "../Components/Selects/infoSelect";

export const PageHeader = () => {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography variant='h5' component='h2' className={classes.pageHeader}>
          <InfoSelect/>
        </Typography>
      </Grid>
    </Grid>
  );
};
