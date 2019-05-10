import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


const styles = {
  root: {
    flexGrow: 1,
    marginBottom: 15,
  }, grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
};

const Emoji = props => (
  <option
    className="emoji"
    role="img"
    aria-label={props.label ? props.label : ""}
    aria-hidden={props.label ? "false" : "true"}
    value={props.label}
  >
    {props.symbol}
  </option>
)

class TopBar extends React.Component {
  state = {
    left: false,
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open, });
  };

  render() {

    const { classes } = this.props;

    const sideList = (
      <div className={classes.list}>
        <List>
          <ListItem onClick={() => this.props.changeContent("home")} button key="About me">
              <Emoji label="boat" symbol="🛥" />️
            <ListItemText primary="Info" />
          </ListItem>
          <ListItem onClick={() => this.props.changeContent("captain")} button key="captain">
              <Emoji label="captain" symbol="🎖️" />️
            <ListItemText primary="Din kaptajn" />
          </ListItem>
          <ListItem onClick={() => this.props.changeContent("alarm")} button key="alarm">
              <Emoji label="sos" symbol="🆘" />️
            <ListItemText primary="Mand over bord" />
          </ListItem>
          <ListItem onClick={() => this.props.changeContent("map")} button key="map">
              <Emoji label="sos" symbol="🗺️" />️
            <ListItemText primary="Kort" />
          </ListItem>
          <ListItem onClick={() => this.props.changeContent("oel")} button key="oel">
            <Emoji label="beer" symbol="🍺" />️
            <ListItemText primary="Øl" />
          </ListItem>
          <ListItem onClick={() => this.props.changeContent("ginhass")} button key="ginhass">
              <Emoji label="beer" symbol="🍸" />️
            <ListItemText primary="Gin Hass" />
          </ListItem>
          <ListItem onClick={() => this.props.changeContent("bramble")} button key="bramble">
              <Emoji label="beer" symbol="🍸" />️
            <ListItemText primary="Bramble" />
          </ListItem>
          <ListItem onClick={() => this.props.changeContent("whiteruss")} button key="witeruss">
              <Emoji label="beer" symbol="🍸" />️
            <ListItemText primary="White Russian" />
          </ListItem>
          <ListItem onClick={() => this.props.changeContent("junglebird")} button key="junglebird">
              <Emoji label="beer" symbol="🍸" />️
            <ListItemText primary="Jungle Bird" />
          </ListItem>
          <ListItem onClick={() => this.props.changeContent("jaegerbomb")} button key="jaegerbomb">
              <Emoji label="beer" symbol="🥃" />️
            <ListItemText primary="Jäger Bomb" />
          </ListItem>
          <ListItem onClick={() => this.props.changeContent("gintonic")} button key="gintonic">
              <Emoji label="beer" symbol="🍸" />️
            <ListItemText primary="Gin and Tonic" />
          </ListItem>
          <ListItem onClick={() => this.props.changeContent("darkginger")} button key="darkginger">
              <Emoji label="beer" symbol="🍸" />️
            <ListItemText primary="Dark and Ginger" />
          </ListItem>
          <ListItem onClick={() => this.props.changeContent("margarita")} button key="margarita">
              <Emoji label="beer" symbol="🍸" />️
            <ListItemText primary="Margarita" />
          </ListItem>
        </List>
      </div>
    );

    return (
      <div className={classes.root}>
        <AppBar position="static" color="primary">
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu" onClick={this.toggleDrawer('left', true)}>
              <MenuIcon />
            </IconButton>
            <SwipeableDrawer open={this.state.left} onClose={this.toggleDrawer('left', false)} onOpen={this.toggleDrawer('left', true)}>
              <div
                tabIndex={0}
                role="button"
                onClick={this.toggleDrawer('left', false)}
                onKeyDown={this.toggleDrawer('left', false)}
              >
                {sideList}
              </div>
            </SwipeableDrawer>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              Amager rundt ( . ) ( . )
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

TopBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TopBar);
