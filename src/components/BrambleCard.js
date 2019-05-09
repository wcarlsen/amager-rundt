import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Bramble from './../assets/images/bramble.png';

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

function BrambleCard(props) {
  const { classes } = props;
  return (
    <Grid container justify='center'>
      <Card className={classes.card} elevation={5} >
        <CardMedia
          className={classes.media}
          image={Bramble}
          title="Contemplative Reptile"
        />
        <CardContent className={classes.content}>
          <Typography gutterBottom variant="h5" component="h2">
            Bramble
          </Typography>
          <Typography component="p">
            <ul>
              <li>5 cL Finsbury dry gin</li>
              <li>1 cL Rose's sugar cane</li>
              <li>1 cL Créme de mure</li>
              <li>3 cL Citronsaft</li>
              <li>Isterninger</li>
            </ul>
          </Typography>
        </CardContent>
      </Card >
    </Grid>
  );
}

BrambleCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BrambleCard);
