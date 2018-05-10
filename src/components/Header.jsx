import React from 'react';
import {NavLink,Link} from 'react-router-dom'

import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

//import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export class Header extends React.Component {

    titleClick() {
        {location.href = '/'}
    }

    constructor(props) {
        super(props);

        this.state = {
            patientMenuOpen:false,
            ruleMenuOpen: false,
        };
    }

    clickPatientsMenuButton = (event) => {
        event.preventDefault();

        this.setState({
            patientMenuOpen: true,
            patientMenuAnchorEl: event.currentTarget,
        });
    };

    clickRuleMenuButton = (event) => {
        event.preventDefault();

        this.setState({
            ruleMenuOpen: true,
            ruleMenuAnchorEl: event.currentTarget,
        })
    }

    handlePaitentsMenuButtonClose = () => {
        this.setState({
            patientMenuOpen: false,
        })
    }

    handleRuleMenuButtonClose = () => {
        this.setState({
            ruleMenuOpen: false,
        })
    }

    render() {
        return (
            <div class="container width-max-100">

                <Toolbar>
                    <ToolbarGroup>
                        <Link expect to="/"><ToolbarTitle text="Main" /></Link>
                        <ToolbarSeparator />
                        <div>
                            <RaisedButton 
                                onClick={this.clickPatientsMenuButton}
                                label="환자 업무"
                            />

                            <Popover
                                open={this.state.patientMenuOpen}
                                anchorEl={this.state.patientMenuAnchorEl}
                                anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
                                targetOrigin={{horizontal: 'left', vertical: 'top'}}
                                onRequestClose={this.handlePaitentsMenuButtonClose}
                            >
                                <Menu>
                                    <Link expect to="/patients/add">
                                        <MenuItem 
                                            onClick={this.handlePaitentsMenuButtonClose}
                                            primaryText="새로운 환자 추가" />
                                    </Link>
                                    <Link expect to="/patients/search">
                                        <MenuItem 
                                            onClick={this.handlePaitentsMenuButtonClose}
                                            primaryText="환자 검색 및 정보 수정" />
                                    </Link>
                                </Menu>
                            </Popover>
                        </div>

                        <div>
                            <RaisedButton
                                onClick={this.clickRuleMenuButton}
                                label="규칙 업무"
                            />

                            <Popover
                                open={this.state.ruleMenuOpen}
                                anchorEl={this.state.ruleMenuAnchorEl}
                                anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
                                targetOrigin={{horizontal: 'left', vertical: 'top'}}
                                onRequestClose={this.handleRuleMenuButtonClose}
                            >
                                <Menu>
                                    <Link expect to="/rules/add">
                                        <MenuItem 
                                            onClick={this.handleRuleMenuButtonClose}
                                            primaryText="새로운 규칙 추가" />
                                    </Link>
                                    <Link expect to="/rules/search">
                                        <MenuItem 
                                            onClick={this.handleRuleMenuButtonClose}
                                            primaryText="규칙 검색 및 정보 수정" />
                                    </Link>
                                </Menu>
                            </Popover>
                        </div>

                    </ToolbarGroup>
                </Toolbar>

               
            </div>
        );
    }
}


/*<li><NavLink expect to="/patients/search" activeStyle={activeStyle}>검색</NavLink></li>
<Route exact path="/" component={MainPage} />
                    <Route exact path="/patients/search" component={PatientSearchPage}/>
                    <Route exact path="/patients/add" component={PatientsDetail} />


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

                    */