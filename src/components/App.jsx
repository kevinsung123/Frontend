import * as React from 'react'
import {BrowserRouter} from 'react-router-dom'
import {Header} from './Header'
import {SideMenu} from './SideMenu'
import {Content} from './Content'

class App extends React.Component {
  render() {
      return (

        <div id="main_wrapper" >
          <Header />
          <div id="side_menu">
             {/* <SideMenu />  */}
          </div> 
          <div>
          <Content />
          </div>
        </div>
      
      );
  }
}

export default App;
