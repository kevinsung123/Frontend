import * as React from 'react'
import {Switch, Route} from 'react-router-dom'

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import {MainPage} from '/pages/MainPage';

import {PatientSearchPage} from '/pages/PatientSearchPage'
import {PatientAddPage} from '/pages/PatientAddPage' 

import {RuleSearchPage} from '/pages/RuleSearchPage'
import {RuleSearchList, RuleDetail, RuleSearchTable} from './Rules';
import AddRule from './Rules/AddRule'

export class Content extends React.Component {
    render() {
        return (
            <div id="content">
                <MuiThemeProvider muiTheme={getMuiTheme()}>
                    
                <Switch>
                    <Route exact path="/" component={MainPage} />
                    <Route exact path="/patients/search" component={PatientSearchPage}/>
                    <Route exact path="/patients/add" component={PatientAddPage} />
                    <Route exact path="/rules/search" component={RuleSearchPage}/>
                    <Route exact path="/rules/add" component={AddRule} />

                </Switch>
                </MuiThemeProvider>
            </div>
        )
    }
}