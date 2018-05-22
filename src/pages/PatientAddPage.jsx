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
import Paper from 'material-ui/Paper';
const style = {
    height: '50%',
    width: '90%',
    margin: 20,
    textAlign: 'center',
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },

};

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
            <div className="container">
                <div className="container">
                    <PatientAddForm />
                </div>
            </div>
        )
    }
}

/*
<div>
                    <div style={style.root}>
                        <Paper style={style} zDepth={2} rounded={true}>
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
                                                {
                                name: "방문재활 환자구분",
                                prop: "pt_class",

                            },
                            {
                                name: "방문재활 신규여부",
                                prop: "pt_new",

                            },
                            {
                                name: "ADL",
                                prop: "ADL",

                            },
                            {
                                name: "KTIS",
                                prop: "KTIS",

                            },
                            {
                                name: "VAS",
                                prop: "VAS",

                            },
                            {
                                name: "MBI",
                                prop: "MBI",

                            },
                            {
                                name: "MMT",
                                prop: "MMT",

                            },
                            {
                                name: "가정간호 환자구분",
                                prop: "hr_class",

                            },
                            {
                                name: "활력증상",
                                prop: "vital_sign",

                            },
                            {
                                name: "영양",
                                prop: "nutrition",

                            },
                            {
                                name: "배뇨 및 배변",
                                prop: "urination",

                            },
                            {
                                name: "호흡 및 정도",
                                prop: "breathdegree",

                            },
                            {
                                name: "일상 생활 수행",
                                prop: "dailyliving",

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
                        </Paper>
                    </div>
*/