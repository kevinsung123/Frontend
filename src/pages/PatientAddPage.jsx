import React, { Component } from 'react';
import { PatientAddTab, PatientDetail, PatientSearchTable, PatientAddForm } from '/components/Patients';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';

export class PatientAddPage extends React.Component {
    state = {
        fields: {}
    };
    onChange = updatedValue => {
        this.setState({
            fields: {
                ...this.state.fields,
                ...updatedValue
            }
        });
    };

    render() {
        return (
            <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
                <div>
                    <PatientAddForm onChange={fields => this.onChange(fields)} />
                    <PatientAddTab>
                    <p>
                        {JSON.stringify(this.state.fields, null, 2)}
                    </p>
                    </PatientAddTab>
                </div>
            </MuiThemeProvider>
        )
    }
}