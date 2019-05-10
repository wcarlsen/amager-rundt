import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Captain from './../assets/images/captain.jpg';

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

function CaptainCard(props) {
  const { classes } = props;
  return (
    <Grid container justify='center'>
      <Card className={classes.card} elevation={5} >
        <CardMedia
          className={classes.media}
          image={Captain}
          title="Contemplative Reptile"
        />
        <CardContent className={classes.content}>
          <Typography gutterBottom variant="h5" component="h2">
            Din Kaptajn
          </Typography>
          <Typography component="div">
            Simon Holmegaard Nielsen mine damer og herrer
          </Typography>
        </CardContent>
      </Card >
    </Grid>
  );
}

CaptainCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CaptainCard);
