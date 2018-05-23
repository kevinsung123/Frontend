import * as React from 'react';
import TextField from '@material-ui/core/TextField';
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableHeadColumn from "@material-ui/core/TableHead";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import Paper from '@material-ui/core/Paper';
import SelectField from '@material-ui/core/Select';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';


import axios from 'axios';


const style = {
    height: '100%',
    width: '100%',
    margin: "auto",
    textAlign: 'center',

    root: {
        display: 'flex',
        justifyContent: 'space-around',
        margin: "auto"
    },
    card: {
        width: "25%",
        display: "flex",
        margin: "auto",
        flexWrap: 'wrap',
        lineHeight: "1.5em",
        display: 'flex'
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
    },
};

export default class PatientSearchTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: Patient_data,
            value: "",
            query: "",
            columnToQuery: "patientname"
        };
    }

    render() {
        return (
            <div>
                <Card style={style.card}>
                    <CardHeader title="환자조건검색" />
                    <CardContent >
                        <Select display="flex" 
                          
                            value={this.state.columnToQuery}
                            onChange={(event, index, value) =>
                                this.setState({ columnToQuery: value })
                            }
                        >
                            <MenuItem value="patientname" >환자이름</MenuItem>
                            <MenuItem value="patientnumber" >환자번호</MenuItem>
                        </Select>
                        <TextField display="flex" 
                        
                            value={this.state.query}
                            onChange={e => this.setState({ query: e.target.value })}
                        />
                    </CardContent>

                </Card>
                <PatientTable
                    data={this.state.query
                        ? this.state.data.filter(x =>
                            x[this.state.columnToQuery]
                                .toLowerCase()
                                .includes(this.state.query)
                        )
                        : this.state.data
                    }
                    header={PatientTable_Header}
                />
            </div>
        )
    }
}






const PatientTable = ({ data, header }) =>
    <Table>
        <TableHead>
            <TableRow>
                {header.map((x, i) =>
                    <TableCell key={'search-thc' + i.toString()}>
                        {x.name}
                    </TableCell>
                )}
            </TableRow>
        </TableHead>
        <TableBody>
            {data.map((x, i) => row(x, i, header))}
        </TableBody>
    </Table>
    ;


const row = (x, i, header) =>
    <TableRow key={'search-tr' + i.toString()}>
        {header.map((y, k) =>
            <TableCell key={'search-trc' + k.toString()}>
                {x[y.prop]}
            </TableCell>
        )}
    </TableRow>;


const PatientTable_Header = [
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
        name: "환자구분",
        prop: "patient_classification",

    },
    {
        name: "활력증상",
        prop: "vital_sign",

    },
    {
        name: "의식수준",
        prop: "consciouness",

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
    }
]

const Patient_data = [
    {
        "patientname": "이혜정",
        "age": " 56",
        "birthday": "19650819",
        "patient_classification": "비위관",
        "vital_sign": "level2",
        "consciouness": "level3",
        "nutrition": "level3",
        "urination": "level1",
        "breathdegree": "level2",
        "dailyliving": "level1"
    },
    {
        "patientname": "정규남",
        "age": " 65",
        "birthday": "19550819",
        "patient_classification": "위장루",
        "vital_sign": "level2",
        "consciouness": "level2",
        "nutrition": "level3",
        "urination": "level1",
        "breathdegree": "level2",
        "dailyliving": "level1"
    },
    {
        "patientname": "김택용",
        "age": " 52",
        "birthday": "19670819",
        "patient_classification": "정체도뇨관",
        "vital_sign": "level2",
        "consciouness": "level2",
        "nutrition": "level3",
        "urination": "level1",
        "breathdegree": "level2",
        "dailyliving": "level1"
    }
]

