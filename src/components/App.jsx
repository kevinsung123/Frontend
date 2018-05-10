import * as React from 'react'
import {BrowserRouter} from 'react-router-dom'
import {Header} from './Header'
import {Menu} from './Menu'
import {Content} from './Content'

class App extends React.Component {
  render() {
      return (

        <div id="main_wrapper" >
          <Header />
          <div id="section">
            {/* <Menu /> */}
            <Content />
          </div> 
        </div>
      
      );
  }
}

export default App;
