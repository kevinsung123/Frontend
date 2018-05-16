import * as React from 'react';
import {
    Table,
    TableBody,
    TalbeHeader, TableHeaderColumen,
    TableRow, TableRowColumn
} from 'material-ui/Table';
import TextField from 'material-ui/TextField';
import './Patient.sass';
import Paper from 'material-ui/Paper';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import {
    PatientAddTab,
    PatientAddForm,
} from '/components/Patients';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import SearchTable from './SearchTable';
const style = {
    height: '100%',
    width: '70%',
    margin: "auto",
    textAlign: 'center',

    root: {
        display: 'flex',
        justifyContent: 'space-around',
        margin: "auto"
    },
    card:{
        width: "20%",
        display: "flex",
        margin: "auto",
        flexWrap: 'wrap',
        lineHeight: "1.5em"
    },
    cardheader: {
        display: "flex",
        margin: "auto",
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        fontWeight: "300",
        lineHeight: "1.5em",
        width: "100%",
        fontSize: "2.125em",
        boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.14)",
        borderRadius: "3px",
        color: "white",
        background: "#00bcd4",
    }


};

export default class PatientSearchTable extends React.Component {
    state = {
        data: [
            {
                patientname: "이혜민",
                patientnumber: "111 ",
                age: "58",
                birthday: "1950.02.24"
            },
            {
                patientname: "박진영",
                patientnumber: "222 ",
                age: "48",
                birthday: "1945.06.24"
            },
            {
                patientname: "이현우",
                patientnumber: "333 ",
                age: "52",
                birthday: "1955.02.24"
            }
        ],
        value: "",
        query: "",
        columnToQuery: "patientname"
    };

    render() {
        return (
            <div style={style.root}>
                <Card style={style.card}>
                    <CardHeader style={style.cardheader}
                        title="환자조건검색" />
                    <CardText>
                        <SelectField
                            floatingLabelText="환자검색기준"
                            value={this.state.columnToQuery}
                            onChange={(event, index, value) =>
                                this.setState({ columnToQuery: value })
                            }
                        >
                            <MenuItem value="patientname" primaryText="환자이름" />
                            <MenuItem value="patientnumber" primaryText="환자번호" />
                        </SelectField>
                        <TextField
                            hintText="환자검색"
                            floatingLabelText="환자검색"
                            value={this.state.query}
                            onChange={e => this.setState({ query: e.target.value })}
                        />
                    </CardText>
                </Card>
                <br/>
                <br/>
                <Paper style={style} zDepth={2} rounded={false} >
                    <SearchTable
                        data={
                            this.state.query
                                ? this.state.data.filter(x =>
                                    x[this.state.columnToQuery]
                                        .toLowerCase()
                                        .includes(this.state.query)
                                )
                                : this.state.data

                        }
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

                        ]}>

                    </SearchTable>
                </Paper>
            </div>
        )
    }
}



