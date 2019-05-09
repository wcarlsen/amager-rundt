import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import OelImage from './../assets/images/oel.jpg';

const isMobile = window.innerWidth <= 500;

const styles = {
  card: {
    maxWidth: isMobile ? '100%' : '75%',
    width: isMobile ? 300 : 900,
    marginBottom: 15,
  },
  media: {
    height: isMobile ? 500 : 750,
  },
  content: {
    paddingBottom: 100
  }
};

function OelCard(props) {
  const { classes } = props;
  return (
    <Grid container justify='center'>
      <Card className={classes.card} elevation={5} >
        <CardMedia
          className={classes.media}
          image={OelImage}
          title="Contemplative Reptile"
        />
        <CardContent className={classes.content}>
          <Typography gutterBottom variant="h5" component="h2">
            Øl
          </Typography>
          <Typography component="p">
            <ul>
              <li>Rigelige mængder kolde pilsner</li>
            </ul>
          </Typography>
        </CardContent>
      </Card >
    </Grid>
  );
}

OelCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(OelCard);
