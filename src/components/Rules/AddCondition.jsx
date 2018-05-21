import React from 'react'

import {Table, TableRow,TableRowColumn, TableBody, TableCell} from 'material-ui/Table'
import DropDownMenu from 'material-ui/DropDownMenu'
import MenuItem from 'material-ui/MenuItem'
import TextField from 'material-ui/TextField';
import ContentRemove from 'material-ui/svg-icons/content/remove';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import red from '@material-ui/core/colors/red';

export default class Condition extends React.Component {

    constructor(props) {
        super(props);
        // console.log(this.props.order);
        this.state = {
            propertyValue: 0,
            operatorValue: 0,
        };
    }

    handlePropertyChange = (event, index, value) => {
        this.setState({propertyValue: value}, () => {
            this.props.changeCondition(this.idx, this.state.propertyValue, this.state.operatorValue);
        });
    };

    handleOperatorChange = (event, index, value) => {
        var index = parseInt(this.props.index);
        this.setState({operatorValue: value}, () => {
            this.props.changeCondition(index, this.state.propertyValue, this.state.operatorValue);
        });
    };

    handleRemoveCondition = (event) => {
        var index = parseInt(this.props.index);
        console.log(index);
        this.props.removeCondition(index);
        //this.forceUpdate();
    }


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

                <TableRowColumn>
                    <FloatingActionButton mini={true} 
                        onClick={this.handleRemoveCondition.bind(this)}
                        backgroundColor={red['500']} >
                        <ContentRemove />

                    </FloatingActionButton>
                </TableRowColumn>
            </TableRow>
        )
    }
}