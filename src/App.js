import React, { Component } from 'react';
import './App.css';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import Header from "./components/header/header";
import Intro from './components/intro/intro';


const theme = createMuiTheme({
  palette: {
    primary: {
        main: "#7CDBD5"
    },
    secondary: {
        main: "#F53240"
    },
    error: {
        main: "#F9BE02"
    }
  },
});

class App extends Component {
  render() {
    return (
        <MuiThemeProvider theme={theme}>
            <div className="App">
                <CssBaseline/>
                <Header/>
                <Intro/>
            </div>
        </MuiThemeProvider>
    );
  }
}

export default App;
