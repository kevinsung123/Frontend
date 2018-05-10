
import TableHeader from 'grommet/components/TableHeader';
import Table from 'grommet/components/Table';
import TableRow from 'grommet/components/TableRow';
import React from 'react';
import Paper from 'material-ui/Paper';

const style = {
    height: "100%",
    width: "70%",
    margin: 20,
    textAlign: 'center',
    display: 'inline-block',
};

export default class PatientSearchList extends React.Component {
    render() {
        return (
            <div className="PatientSearchList">
                <Paper style={style} zDepth={4} rounded={false} >
                    <Table>
                        <thead className="TableHeader">
                            <tr>
                                <th>
                                    환자명
                                </th>
                                <th>
                                    생년월일
                                </th>
                                <th>
                                    성별
                                </th>
                                <th>
                                    연락처
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <TableRow>
                                <td> 이혜민</td>
                                <td> 1950.02.24 </td>
                                <td> 여</td>
                                <td> 02-xxxx-xxxx</td>
                            </TableRow>
                            <TableRow>
                                <td> 박진영</td>
                                <td> 1945.05.24 </td>
                                <td> 남</td>
                                <td> 02-xxxx-xxxx</td>
                            </TableRow>
                            <TableRow>
                                <td> 이현우</td>
                                <td> 1943.01.24 </td>
                                <td> 남</td>
                                <td> 02-xxxx-xxxx</td>
                            </TableRow>
                            <TableRow>
                                <td> 김혜영</td>
                                <td> 1955.02.24 </td>
                                <td> 여</td>
                                <td> 02-xxxx-xxxx</td>
                            </TableRow>
                        </tbody>
                    </Table>
                </Paper>
            </div>
        )
    }
}



