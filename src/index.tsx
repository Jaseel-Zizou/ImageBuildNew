import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import AppRouter from "./appRouter";
import { ThemeProvider } from '@material-ui/styles';
import theme from './theme';

class Root extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <AppRouter />
    </ThemeProvider>    )
  }
}

ReactDOM.render(<Root />, document.getElementById("root"));
