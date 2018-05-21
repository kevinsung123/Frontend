import React from 'react'

import {Table, TableRow,TableRowColumn, TableBody, TableCell} from 'material-ui/Table'
import DropDownMenu from 'material-ui/DropDownMenu'
import MenuItem from 'material-ui/MenuItem'
import TextField from 'material-ui/TextField';

export default class Condition extends React.Component {

    constructor(props) {
        super(props);

        this.order = this.props.order;
        this.state = {
            propertyValue: this.props.propertyValue,
            operatorValue: this.props.operatorValue,
        };
    }

    handlePropertyChange = (event, index, value) => {
        this.setState({propertyValue: value}, () => {
            this.props.changeCondition(this.order, this.state.propertyValue, this.state.operatorValue);
        });
    };

    handleOperatorChange = (event, index, value) => {
        this.setState({operatorValue: value}, () => {
            this.props.changeCondition(this.order, this.state.propertyValue, this.state.operatorValue);
        });
    };


    render() {
        return (
            <TableRow>
                <TableRowColumn>
                    <DropDownMenu value={this.state.propertyValue} onChange={this.handlePropertyChange}>
                        <MenuItem value={0} primaryText="속성 설정" />
                        <MenuItem value={1} primaryText="가정간호" />
                        <MenuItem value={2} primaryText="방문재활" />
                    </DropDownMenu>
                </TableRowColumn>

                <TableRowColumn>
                    <DropDownMenu value={this.state.operatorValue} onChange={this.handleOperatorChange}>
                        <MenuItem value={0} primaryText="==" />
                        <MenuItem value={1} primaryText="<>" />
                        <MenuItem value={2} primaryText=">=" />
                        <MenuItem value={3} primaryText=">" />
                        <MenuItem value={4} primaryText="<=" />
                        <MenuItem value={5} primaryText="<" />
                        <MenuItem value={6} primaryText="IN" />
                        <MenuItem value={7} primaryText="range" />
                        <MenuItem value={8} primaryText="YN" />
                    </DropDownMenu>
                </TableRowColumn>

                <TableRowColumn>
                    <TextField
                        id="required"
                        label="Required"
                    />
                </TableRowColumn>
            </TableRow>

        )
    }
}