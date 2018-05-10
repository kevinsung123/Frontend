import * as React from 'react'
import {BrowserRouter} from 'react-router-dom'
import {Header} from './Header'

import {Content} from './Content'

class App extends React.Component {
  render() {
      return (

        <div id="main_wrapper" >
          <Header />
          <Content />
        </div>
      
      );
  }
}

export default App;
