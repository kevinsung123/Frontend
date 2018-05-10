import React from 'react';
import {NavLink,Link} from 'react-router-dom'
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import Tabs from 'material-ui/Tabs';
//import Tab from 'material-ui/Tab';
//import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export class Header extends React.Component {

    get titleStyle() {
        return {
            cursor: 'pointer',
            color: 'black'
        }
    }

    get flatButtonStyle() {
        return {
            backgroundColor: 'transparent',
            color: 'white',
        }
    }

    titleClick() {
        {location.href = '/'}
    }

    render() {
        return (
            <div class="container width-max-100">
                <AppBar
                    title={
                        <Link expect to="/">
                        <span style={this.titleStyle}
                              onClick={this.titleClick}>
                            IMSAFE
                        </span>
                        </Link>
                    }
                >
                    <NavLink expect to="/patients/add">
                        <FlatButton label="환자" style={this.flatButtonStyle} />
                    </NavLink>

                    <NavLink expect to="/rules/add">
                        <FlatButton label="규칙" style={this.flatButtonStyle} />
                    </NavLink>
                </AppBar>
            </div>
        );
    }
}
/*<li><NavLink expect to="/patients/search" activeStyle={activeStyle}>검색</NavLink></li>
<Route exact path="/" component={MainPage} />
                    <Route exact path="/patients/search" component={PatientSearchPage}/>
                    <Route exact path="/patients/add" component={PatientsDetail} />*/