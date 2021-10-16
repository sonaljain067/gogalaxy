import * as React from 'react';
import '../Main.css'
import Box from '@mui/material/Box';
import { makeStyles} from '@material-ui/styles';
import {Grid} from '@material-ui/core';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const useStyles = makeStyles({
  basicCard: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    textAlign: 'center'
  }
})
export default function BasicCard({details}) {
  const classes = useStyles();
  const {failings, links, ships, payloads, cores, failures} = details;
  return (
    
      <div className={classes.basicCard}>
        <Grid container className={classes.container}>
          <Grid item md={2} lg={3} className={classes.item}></Grid>
          <Grid item xs={12} md={8} lg={6} className={classes.item}>
            <Card>
        <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            ID: {details.id}
            </Typography>
            <Typography variant="h2" component="div">
            {details.name}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Rocket: {details.rocket}
            </Typography>
            <Typography variant="p">
            {details.details}
            <br />
            </Typography>
            <Typography variant="h6">
            Launchpad: {details.launchpad}
            </Typography>
            <Typography variant="h6">
            Article: {details.article}
            </Typography>
            <Typography variant="h6">
            Wikipedia: {details.wikipedia}
            </Typography>
            <Typography variant="h6">
            Youtube: {details.youtube_id}
            </Typography>

            <Typography variant="h5">
            Dates
            </Typography>
            <Typography variant="body2">
            In UTC: {details.static_fire_date_utc} or {details.date_utc}
            </Typography>
            <Typography variant="body2">
            In UNIX: {details.static_fire_date_unix} or {details.date_unix}
            </Typography>
            <Typography variant="body2">
            In Local: {details.date_local}
            </Typography>
            {details.flight_number && <Typography variant="h6">
            Flight number: {details.flight_number}.
            </Typography>}
            <Typography variant="h6">
            {details.window ? 'It has {details.window} windows.': ''} </Typography> 
           <Typography variant="h6">
            Failing: {failures.time ? failures.time : 0} times {failures.reason &&  <Typography variant="h6"> because of {failures.reason}.  </Typography>}
            </Typography> 
            <Typography variant="h6">
            Success: {details.success}.
            </Typography>
            {/* <Typography variant="h6">
              Ships: {details.fairings.ships ? details.fairings.ships.map((ship) => return ship) : 'No ships'}
             </Typography> */}
             <Typography variant="body">
              Net: {details.net ? 'True' : 'False'}, &nbsp;  &nbsp;Presskit: {details.presskit ? 'True' : 'False'},  &nbsp;  &nbsp; Success: {details.success ? 'True' : 'False'},  &nbsp;  &nbsp; Upcoming: {details.upcoming ? 'True' : 'False'},  &nbsp;  &nbsp; Auto-update: {details.auto_update ? 'True' : 'False'},  &nbsp;  &nbsp; TBD: {details.tbd ? 'True' : 'False'}  &nbsp;  &nbsp; 
            </Typography>
            <Typography variant="p">
              Fairings reused: {details.fairings.reused ? 'True' : 'False'},  &nbsp;  &nbsp; Fairings Recovery Update: {details.fairings.recovery_update ? 'True' : 'False'},  &nbsp;  &nbsp; Fairing Recovered: {details.recovered ? 'True' : 'False'}
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small">Learn More</Button>
        </CardActions>
        </Card>
          </Grid>
          <Grid item md={2} lg={3} className={classes.item}></Grid>
      </Grid>
      
      </div>
   
  );
}