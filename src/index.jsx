import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'

//import 'bootstrap';

import App from './components/App';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import './app.sass'

import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families : ['Do Hyeon', 'Gugi', 'Sunflower:300', 'Gothic A1', 'Nanum Gothic']
  }
});


//const history = createBrowserHistory();

ReactDOM.render(
  <BrowserRouter>
    <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
      <App />
    </MuiThemeProvider>
  </BrowserRouter>,
  document.getElementById('react-app')
);

