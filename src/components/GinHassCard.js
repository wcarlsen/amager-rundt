import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import GinHass from './../assets/images/gin_hass.png';

const isMobile = window.innerWidth <= 500;

const styles = {
  card: {
    maxWidth: isMobile ? '100%' : '75%',
    width: isMobile ? 400 : 800,
    marginBottom: 15,
  },
  media: {
    height: isMobile ? 500 : 750,
  },
  content: {
    paddingBottom: 100
  }
};

function GinHassCard(props) {
  const { classes } = props;
  return (
    <Grid container justify='center'>
      <Card className={classes.card} elevation={5} >
        <CardMedia
          className={classes.media}
          image={GinHass}
          title="Contemplative Reptile"
        />
        <CardContent className={classes.content}>
          <Typography gutterBottom variant="h5" component="h2">
            Gin Hass
          </Typography>
          <Typography component="p">
            <ul>
              <li>4 CL Gin</li>
              <li>10 CL Lemon sodavand</li>
              <li>2 CL Mango sirup</li>
              <li>Isterninger</li>
            </ul>
          </Typography>
        </CardContent>
      </Card >
    </Grid>
  );
}

GinHassCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GinHassCard);
