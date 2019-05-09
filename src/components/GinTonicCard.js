import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import GT from './../assets/images/gt.png';

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

function GinTonicCard(props) {
  const { classes } = props;
  return (
    <Grid container justify='center'>
      <Card className={classes.card} elevation={5} >
        <CardMedia
          className={classes.media}
          image={GT}
          title="Contemplative Reptile"
        />
        <CardContent className={classes.content}>
          <Typography gutterBottom variant="h5" component="h2">
            Gin and Tonic
          </Typography>
          <Typography component="p">
            <ul>
              <li>4 cL Finsbury dry gin</li>
              <li>10 cL Tonic</li>
              <li>1 skice citron</li>
              <li>Isterninger</li>
            </ul>
          </Typography>
        </CardContent>
      </Card >
    </Grid>
  );
}

GinTonicCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GinTonicCard);
