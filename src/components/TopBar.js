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
import ListItemIcon from '@material-ui/core/ListItemIcon';
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
            <ListItemIcon>
              🛥️
            </ListItemIcon>
            <ListItemText primary="Info" />
          </ListItem>
          <ListItem onClick={() => this.props.changeContent("oel")} button key="oel">
            <ListItemIcon>
              🍺
            </ListItemIcon>
            <ListItemText primary="Øl" />
          </ListItem>
          <ListItem onClick={() => this.props.changeContent("ginhass")} button key="ginhass">
            <ListItemIcon>
              🍸
            </ListItemIcon>
            <ListItemText primary="Gin Hass" />
          </ListItem>
          <ListItem onClick={() => this.props.changeContent("bramble")} button key="bramble">
            <ListItemIcon>
              🍸
            </ListItemIcon>
            <ListItemText primary="Bramble" />
          </ListItem>
          <ListItem onClick={() => this.props.changeContent("whiteruss")} button key="witeruss">
            <ListItemIcon>
              🍸
            </ListItemIcon>
            <ListItemText primary="White Russian" />
          </ListItem>
          <ListItem onClick={() => this.props.changeContent("junglebird")} button key="junglebird">
            <ListItemIcon>
              🍸
            </ListItemIcon>
            <ListItemText primary="Jungle Bird" />
          </ListItem>
          <ListItem onClick={() => this.props.changeContent("jaegerbomb")} button key="jaegerbomb">
            <ListItemIcon>
              🥃
            </ListItemIcon>
            <ListItemText primary="Jäger Bomb" />
          </ListItem>
          <ListItem onClick={() => this.props.changeContent("gintonic")} button key="gintonic">
            <ListItemIcon>
              🍸
            </ListItemIcon>
            <ListItemText primary="Gin and Tonic" />
          </ListItem>
          <ListItem onClick={() => this.props.changeContent("darkginger")} button key="darkginger">
            <ListItemIcon>
              🍸
            </ListItemIcon>
            <ListItemText primary="Dark and Ginger" />
          </ListItem>
          <ListItem onClick={() => this.props.changeContent("margarita")} button key="margarita">
            <ListItemIcon>
              🍸
            </ListItemIcon>
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
              Amager rundt i jolle ( . ) ( . )
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
