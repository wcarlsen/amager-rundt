import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import HomeImage from './../assets/images/home.jpg';

const isMobile = window.innerWidth <= 500;

const styles = {
  card: {
    maxWidth: isMobile ? '100%' : '75%',
    width: isMobile ? 'auto' : 800,
    marginBottom: 15,
  },
  media: {
    height: isMobile ? 300 : 600,
  },
  content: {
    paddingBottom: 100
  }
};

function HomeCard(props) {
  const { classes } = props;
  return (
    <Grid container justify='center'>
      <Card className={classes.card} elevation={5} >
        <CardMedia
          className={classes.media}
          image={HomeImage}
          title="Contemplative Reptile"
        />
        <CardContent className={classes.content}>
          <Typography gutterBottom variant="h5" component="h2">
            Info
          </Typography>
          <Typography component="div">
            Velkommen til dette års Amager rundt i jolle ( . ) ( . ). Kig i burgermenuen oppe i venstre hjørne for at se, hvad der er på menuen i år og andre vigtige informationer.
          </Typography>
        </CardContent>
      </Card >
    </Grid>
  );
}

HomeCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HomeCard);
