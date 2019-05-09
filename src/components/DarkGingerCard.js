import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import DarkGinger from './../assets/images/darkginger.png';

const isMobile = window.innerWidth <= 500;

const styles = {
  card: {
    maxWidth: isMobile ? '100%' : '75%',
    width: isMobile ? 400 : 800,
    marginBottom: 15,
  },
  media: {
    height: isMobile ? 400 : 750,
  },
  content: {
    paddingBottom: 100
  }
};

function DarkGingerCard(props) {
  const { classes } = props;
  return (
    <Grid container justify='center'>
      <Card className={classes.card} elevation={5} >
        <CardMedia
          className={classes.media}
          image={DarkGinger}
          title="Contemplative Reptile"
        />
        <CardContent className={classes.content}>
          <Typography gutterBottom variant="h5" component="h2">
            Dark and ginger
          </Typography>
          <Typography component="p">
            <ul>
              <li>5 cL Havana Club rom</li>
              <li>2 skvæt Angostura bitter</li>
              <li>1 cL Melasessesirup</li>
              <li>2 cL Limesaft</li>
              <li>Isterninger</li>
              <li>Toppes af med ginger beer</li>
            </ul>
          </Typography>
        </CardContent>
      </Card >
    </Grid>
  );
}

DarkGingerCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DarkGingerCard);
