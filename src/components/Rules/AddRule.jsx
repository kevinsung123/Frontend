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

import axios from 'axios';

import Conditions from './AddCondition';


export default class AddRule extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            serviceValue: 0,
            conditions: [{order: 0, propertyValue:0, operatorValue:0}],
        };
    }

    handleChange = (event, index, value) => {
    	this.setState({serviceValue: value})
	};

    clickAddNewCondition = () => {
    	this.setState({
			...this.state,
			conditions: [...this.state.conditions, {order: this.state.conditions.length, propertyValue: 0, operatorValue: 0}],
		});

	};

    handleChangeCondition = (order, propertyValue, operatorValue) => {
		let newConditions = this.state.conditions;
		newConditions[order] = {
			...newConditions[order],
			propertyValue,
			operatorValue,
		};

		this.setState({
			...this.state,
			conditions: newConditions,
		});

	};

    clickSubmitButton = () => {

		axios.post('/rule', {
			...this.state,
        }).then((response) => {
        	console.log(response);
		}).catch((error) => {
			console.log(error);
		})

	};

    //TODO 서비스 할당에서 하드코딩된 서비스 리스트(MenuItem)들은 실제 서버로부터 받아야한다.
    render() {
        return (
        	<div className="container">

			  	<Table>
					<TableBody
						displayRowCheckbox={false}
					>
				  		<TableRow>
							<TableRowColumn>규칙 이름</TableRowColumn>
							<TableRowColumn>
					  		<TextField
								id="required"
								label="Required"
							/>
							</TableRowColumn>
				 		</TableRow>

				 		<TableRow>
							<TableRowColumn>서비스 할당</TableRowColumn>
							<TableRowColumn>

								<DropDownMenu value={this.state.serviceValue} onChange={this.handleChange}>
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
						</TableRow>


						{this.state.conditions.map(

							(condition, i) =>
								<Conditions
									key={'condition_'+i}
									changeCondition={this.handleChangeCondition}
									{...condition} />

						)}

                        <TableRow>
                            <TableRowColumn>
                                <FloatingActionButton mini={true} onClick={this.clickAddNewCondition}>
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