import React from 'react'

import {Table,TableHeader,TableHeaderColumn,TableRow,TableRowColumn,TableBody} from 'material-ui/Table'

export default class AddRule extends React.Component {
	get tableStyle() {
		
	}
    render() {
        return (
    	  <Table>
		    <TableHeader>
		      <TableRow>
		        <TableHeaderColumn>ID</TableHeaderColumn>
		        <TableHeaderColumn>Name</TableHeaderColumn>
		        <TableHeaderColumn>Status</TableHeaderColumn>
		      </TableRow>
		    </TableHeader>
		    <TableBody>
		      <TableRow>
		        <TableRowColumn>1</TableRowColumn>
		        <TableRowColumn>John Smith</TableRowColumn>
		        <TableRowColumn>Employed</TableRowColumn>
		      </TableRow>
		      <TableRow>
		        <TableRowColumn>2</TableRowColumn>
		        <TableRowColumn>Randal White</TableRowColumn>
		        <TableRowColumn>Unemployed</TableRowColumn>
		      </TableRow>
		      <TableRow>
		        <TableRowColumn>3</TableRowColumn>
		        <TableRowColumn>Stephanie Sanders</TableRowColumn>
		        <TableRowColumn>Employed</TableRowColumn>
		      </TableRow>
		      <TableRow>
		        <TableRowColumn>4</TableRowColumn>
		        <TableRowColumn>Steve Brown</TableRowColumn>
		        <TableRowColumn>Employed</TableRowColumn>
		      </TableRow>
		      <TableRow>
		        <TableRowColumn>5</TableRowColumn>
		        <TableRowColumn>Christopher Nolan</TableRowColumn>
		        <TableRowColumn>Unemployed</TableRowColumn>
		      </TableRow>
		    </TableBody>
		  </Table>
        )
    }
}