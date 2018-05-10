import * as React from 'react';
import { Table, TableBody, TalbeHeader, TableHeaderColumen, TableRow, TableRowColumn } from 'material-ui/Table';
import TextField from 'material-ui/TextField';
import DatePicker from './DatePicker';
import DropMenu from './DropMenu';
import './Patient.sass';
import Paper from 'material-ui/Paper';

const style = {
    height: '100%',
    width: '70%',
    margin: 20,
    textAlign: 'center',

};

export default class PatientSearchTable extends React.Component {
    render() {
        return (
            <div className="PatientTable">
                <Paper style={style} zDepth={4} rounded={false} >
                    <Table>
                        <TableBody id ="TB">
                            <TableRow >
                                <TableRowColumn>기간</TableRowColumn>
                                <TableRowColumn><DatePicker /></TableRowColumn>
                            </TableRow>
                            <TableRow>
                                <TableRowColumn>서비스명</TableRowColumn>
                                <TableRowColumn>가정간호</TableRowColumn>
                                <TableRowColumn>방문재활</TableRowColumn>
                                <TableRowColumn>치매예방</TableRowColumn>
                                <TableRowColumn>복약상담</TableRowColumn>
                            </TableRow>
                            <TableRow>
                                <TableRowColumn>환자정보</TableRowColumn>
                                <TableRowColumn><DropMenu /></TableRowColumn>
                                <TableRowColumn><TextField /></TableRowColumn>
                            </TableRow>
                        </TableBody>
                    </Table>
                </Paper>
            </div>
        );
    }
}

