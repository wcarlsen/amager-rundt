import React, { Component } from 'react';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import TopBar from './components/TopBar';
import HomeCard from './components/HomeCard';
import OelCard from './components/OelCard';
import GinHassCard from './components/GinHassCard';
import BrambleCard from './components/BrambleCard';
import WhiteRussCard from './components/WhiteRussCard';
import JungleBirdCard from './components/JungleBirdCard';
import JaegerBombCard from './components/JaegerBombCard';
import GinTonicCard from './components/GinTonicCard';
import DarkGingerCard from './components/DarkGingerCard';
import MargaritaCard from './components/MargaritaCard';

const theme = createMuiTheme({
  palette: {
    primary: blue,
  },
  typography: {
    useNextVariants: true,
  },
});

class App extends Component {
  state = {
    content: "home",
  };

  changeContent = (contentName) => {
    this.setState({ content: contentName });
  };

  render() {

    let contentComponent;

    switch (this.state.content) {
      case "home":
        contentComponent = <HomeCard/>;
        break;
        case "oel":
          contentComponent = <OelCard/>;
          break;
        case "ginhass":
          contentComponent = <GinHassCard/>;
          break;
        case "bramble":
          contentComponent = <BrambleCard/>;
          break;
        case "whiteruss":
          contentComponent = <WhiteRussCard/>;
          break;
        case "junglebird":
          contentComponent = <JungleBirdCard/>;
          break;
        case "jaegerbomb":
          contentComponent = <JaegerBombCard/>;
          break;
        case "gintonic":
          contentComponent = <GinTonicCard/>;
          break;
        case "darkginger":
          contentComponent = <DarkGingerCard/>;
          break;
        case "margarita":
          contentComponent = <MargaritaCard/>;
          break;
      default:
        contentComponent = <HomeCard/>;
        break;
    }

    return (
      <div className="App" >
        <MuiThemeProvider theme={theme}>
          <TopBar changeContent={this.changeContent} />
          <div>
            {contentComponent}
          </div>
        </MuiThemeProvider>
      </div >
    );
  }
}

export default App;
