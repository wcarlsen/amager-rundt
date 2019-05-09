import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import JungleBird from './../assets/images/jungle.png';

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

function JungleBirdCard(props) {
  const { classes } = props;
  return (
    <Grid container justify='center'>
      <Card className={classes.card} elevation={5} >
        <CardMedia
          className={classes.media}
          image={JungleBird}
          title="Contemplative Reptile"
        />
        <CardContent className={classes.content}>
          <Typography gutterBottom variant="h5" component="h2">
            Jungle Bird
          </Typography>
          <Typography component="p">
            <ul>
              <li>4.5 cL Mørk rom</li>
              <li>2.5 cL Campari</li>
              <li>1.5 cL Sukkerlage</li>
              <li>4.5 cL Ananasjuice</li>
              <li>1.5 cL Limejuice</li>
              <li>Isterninger</li>
            </ul>
          </Typography>
        </CardContent>
      </Card >
    </Grid>
  );
}

JungleBirdCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(JungleBirdCard);
