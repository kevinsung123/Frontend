import React, { Component } from 'react';
import {
    PatientAddTab,
    PatientDetail,
    PatientSearchTable,
    PatientAddForm,
    PatientAddTable
} from '/components/Patients';
import { Tabs, Tab } from 'material-ui/Tabs';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';

const styles = {
    headline: {
        fontSize: 24,
        paddingTop: 16,
        marginBottom: 12,
        fontWeight: 400,
    },
};
export class PatientAddPage extends React.Component {
    state = {
        data: []
    };

    render() {
        return (
            <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
                <div>
                    <PatientAddForm
                        onSubmit={submission =>
                            this.setState({
                                data: [...this.state.data, submission]
                            })}
                    />
                    <Tabs
                        value={this.state.value}
                        onChange={this.handleChange}
                    >
                        <Tab label="환자상세정보" value="a">
                            <div>
                                <h2 style={styles.headline}></h2>
                                <PatientAddTable
                                    data={this.state.data}
                                    header={[
                                        {
                                            name: "이름",
                                            prop: "patientname",

                                        },
                                        {
                                            name: "나이",
                                            prop: "age",

                                        },
                                        {
                                            name: "생년월일",
                                            prop: "birthday",

                                        },

                                    ]}
                                />
                            </div>
                        </Tab>
                        <Tab label="추천 서비스" value="b">
                            <div>
                                <h2 style={styles.headline}></h2>
                                <p>
                                    추천서비스
                                 </p>
                            </div>
                        </Tab>
                    </Tabs>
                </div>
            </MuiThemeProvider>
        )
    }
}