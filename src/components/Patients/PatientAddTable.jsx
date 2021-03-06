import React from 'react';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';
import Paper from 'material-ui/Paper';
const style = {
    height: '30%',
    width: '50%',
    margin: 20,
    textAlign: 'center',

};
const row = (x, i, header) =>
    <TableRow key={'tr-${i}'}>
        {header.map((y, k) =>
            <TableRowColumn key={'patient-trc-${k}'}>
                {x[y.prop]}
            </TableRowColumn>
        )}
    </TableRow>;


export default ({ data, header }) =>
   
        <Table>
            <TableHeader>
                <TableRow>
                    {header.map((x, i) =>
                        <TableHeaderColumn key={'patient-thc-${i}'}>
                            {x.name}
                        </TableHeaderColumn>
                    )}
                </TableRow>
            </TableHeader>
            <TableBody>
                {data.map((x, i) => row(x, i, header))}
            </TableBody>
        </Table>
   ;
