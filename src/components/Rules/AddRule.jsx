import React from 'react'

import {Table, TableHeader, TableHeaderColumn, TableRow,TableRowColumn,TableBody, TableCell} from 'material-ui/Table'
import TextField from 'material-ui/TextField';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import DropDownMenu from 'material-ui/DropDownMenu';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import red from '@material-ui/core/colors/red';
import ContentRemove from 'material-ui/svg-icons/content/remove';

import axios from 'axios';

import Condition from './AddCondition';


export default class AddRule extends React.Component {

    constructor(props) {
        super(props);

        this.removeCondition = this.removeCondition.bind(this);
        this.clickAddNewCondition = this.clickAddNewCondition.bind(this);

        this.state = {
        	name: "",
            serviceValue: 0,
            conditions: [
            	{propertyValue:0, operatorValue:0, value: ""}
            ],
        };
    }

    nameChange = (event) => {
    	this.setState({
    		...this.state,
    		name: event.target.value,
    	})
    };

	clickAddNewCondition = () => {
		var new_conditions = this.state.conditions;
		new_conditions.push({propertyValue:0, operatorValue:0});
		this.setState({
			...this.state,
			conditions: new_conditions,
		});
	};

	handleServiceChange = (event, index, value) => {
		this.setState({
			...this.state,
			serviceValue: value,
		})
	};

    handlePropertyChange = (value, idx) => {
    	console.log(value, idx);
    	var new_conditions = this.state.conditions;
		new_conditions[idx] = {...new_conditions[idx], propertyValue: value};

		console.log(new_conditions);
		this.setState({
			...this.state,
			conditions: new_conditions,
		});
    };

    handleOperatorChange = (value, idx) => {
        var new_conditions = this.state.conditions;
		new_conditions[idx] = {...new_conditions[idx], operatorValue: value};
		this.setState({
			...this.state,
			conditions: new_conditions,
		});
    };

    handleValueChange = (event, idx) => {
    	var new_conditions = this.state.conditions;
		new_conditions[idx] = {...new_conditions[idx], value: event.target.value};
		this.setState({
			...this.state,
			conditions: new_conditions,
		});
    }

    removeCondition = (idx) => {
    	var new_conditions = this.state.conditions;
		new_conditions.splice(idx, 1);
		this.setState({
			...this.state,
			conditions: new_conditions,
		});
    };

    clickSubmitButton = () => {
    	axios.post('/rule', {
			...this.state,
        }).then((response) => {
        	alert('룰 등록이 완료되었습니다.');
        	console.log(response);
		}).catch((error) => {
			alert('룰 등록이 실패하였습니다. 다시 시도해주세요.');
			console.log(error);
		})
    }


    //TODO 서비스 할당에서 하드코딩된 서비스 리스트(MenuItem)들은 실제 서버로부터 받아야한다.
    render() {
        return (
        	<div className="container">

			  	<Table>
					<TableBody
						displayRowCheckbox={false}
					>
				  		<TableRow>
							<TableRowColumn colSpan={2}>규칙 이름</TableRowColumn>
							<TableRowColumn>
					  		<TextField
								id="Required"
								label="Required"
								value={this.state.name}
								onChange={this.nameChange}
							/>

							</TableRowColumn>
				 		</TableRow>

				 		<TableRow>
							<TableRowColumn colSpan={2}>서비스 할당</TableRowColumn>
							<TableRowColumn>

								<DropDownMenu value={this.state.serviceValue} onChange={this.handleServiceChange}>
									<MenuItem value={0} primaryText="서비스" />
									<MenuItem value={1} primaryText="가정간호" />
									<MenuItem value={2} primaryText="방문재활" />
								</DropDownMenu>

					  		</TableRowColumn>
				  		</TableRow>
				  		<TableRow>
							<TableRowColumn>
								Property
							</TableRowColumn>
							<TableRowColumn>
								Operator
							</TableRowColumn>
							<TableRowColumn>
								Value
							</TableRowColumn>
							<TableRowColumn>
								Remove
							</TableRowColumn>
						</TableRow>


						{this.state.conditions.map(

							(condition, idx) => (
							
								<TableRow>
					                <TableRowColumn>
					                    <DropDownMenu value={this.state.conditions[idx].propertyValue} 
					                    	onChange={(event, index, value)=>this.handlePropertyChange(value, idx)}>

					                        <MenuItem value={0} primaryText="속성 설정" />
					                        <MenuItem value={1} primaryText="가정간호" />
					                        <MenuItem value={2} primaryText="방문재활" />
					                    </DropDownMenu>
					                </TableRowColumn>

					                <TableRowColumn>
					                    <DropDownMenu value={this.state.conditions[idx].operatorValue} 
					                    	onChange={(event, index, value)=>this.handleOperatorChange(value, idx)}>
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
					                    	value={this.state.conditions[idx].value}
					                    	onChange={(event)=>this.handleValueChange(event, idx)}
					                        id="Required"
					                        label="Required"
					                    />
					                </TableRowColumn>

					                <TableRowColumn>
					                    <FloatingActionButton 
					                    	key={'remove_'+idx.toString()}
					                    	mini={true} 
					                        onClick={()=>this.removeCondition(idx)}
					                        backgroundColor={red['500']} >
					                        <ContentRemove />
					                    </FloatingActionButton>
					                </TableRowColumn>
					               
					            </TableRow>
							)
						)}

                        <TableRow>
                            <TableRowColumn>
                                <FloatingActionButton key={'Add Condition'} mini={true} onClick={this.clickAddNewCondition}>
									<ContentAdd />
								</FloatingActionButton>
                            </TableRowColumn>
                        </TableRow>

				</TableBody>
			  </Table>

			  <RaisedButton label="Submit" onClick={this.clickSubmitButton} />
			</div>
        )
    }
}

/*

*/