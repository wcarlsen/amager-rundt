import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Bramble from './../assets/images/white.png';

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

function WhiteRussCard(props) {
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
            White Russian
          </Typography>
          <Typography component="p">
            <ul>
              <li>4 cL Vodka</li>
              <li>2.5 cL Kahlúa</li>
              <li>2 cL fløde</li>
              <li>Isterninger</li>
            </ul>
          </Typography>
        </CardContent>
      </Card >
    </Grid>
  );
}

WhiteRussCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(WhiteRussCard);
