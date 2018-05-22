import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Form from "./RuleSearchForm";

import orderBy from "lodash/orderBy";

import axios from 'axios';

//Material-ui import
import SelectField from "material-ui/SelectField";
import MenuItem from "material-ui/MenuItem";
import TextField from "material-ui/TextField";
import DeleteIcon from "material-ui/svg-icons/action/delete"
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
//import {Table, TableHeader, TableHeaderColumn, TableRow,TableRowColumn,TableBody, TableCell} from 'material-ui/core/Table'

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";

import {VHS_property} from "../../data";
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
//End of Material-ui import


export default class SearchRule extends React.Component {

  constructor(props) {
    super(props);

    //this.load_property = this.load_property.bind(this);
    //this.load_registered_rule = this.load_registered_rule.bind(this);
    this.state = {
      vhs_property_table: [],
      vhs_rule_list: [],
    }
  }

  componentWillMount() {

    this.load_property();
    this.load_registered_rule();
  }
  
  load_property = () => {

    let arr = []
    let i=0;
    let idx=0;
    for(i=0;i<VHS_property.length;i+=5) {
      arr.push(VHS_property.slice(i,i+5));
    }

    
    this.setState({
      ...this.state,
      vhs_property_table: arr
    })


  };

  load_registered_rule = () => {
    axios.get('/rule', {})
      .then((response) => {
        this.setState({
          ...this.state,
          vhs_rule_list: response.data,
        }, ()=>{
          /*let rule_list_status = []
          this.vhs_rule_list.map((rule_item, idx)=>{
            rule_list_status.push({detail: false})
          })
          this.setState({
            ...this.state,
            rule_list_status
          });*/
        });
      }).catch((error) => {
        console.log(error);
      })    
  };

  toggleRuleItemDetail = (idx) => {
    
    let new_vhs_rule_list = this.state.vhs_rule_list;
    let cur_rule_item = new_vhs_rule_list[idx];
    cur_rule_item["detail"] = !cur_rule_item["detail"]
    new_vhs_rule_list[idx] = cur_rule_item
    this.setState({
      ...this.state,
      vhs_rule_list: new_vhs_rule_list,
    });
    //console.log(this.state);
  }

  render() {
    return (
        <div className="container">
          <SearchConditionTable property_table={this.state.vhs_property_table} />   
          <SearchRuleTable rule_list={this.state.vhs_rule_list}
            toggleRuleItemDetail={this.toggleRuleItemDetail} />
        </div>
    );
  }
}

const SearchRuleTable = ({rule_list, toggleRuleItemDetail=f=>f}) => {

  return (
    <Table>
      <TableBody
        >
        {rule_list.map(
          (rule_item, idx) => ([
            <SearchRuleItem key={idx.toString()}
              rule_item={rule_item}
              index={idx}
              onClick={ ()=>toggleRuleItemDetail(idx) }
            />,
            <SearchRuleItemDetail key={"RuleTableRowDetail" + idx.toString()}
              rule_item={rule_item}
              rule_detail={rule_item.detail}
            />
          ])
        )}
      </TableBody>
    </Table>
  )
}
SearchRuleTable.propTypes = {
  rule_list: PropTypes.array,
}

const SearchRuleItem = ({rule_item, index, onClick=f=>f}) => {

  return (
    <TableRow>
      <TableCell>
        {rule_item.name}
      </TableCell>
      <TableCell>
        {rule_item.service}
      </TableCell>
      <TableCell>
        <Button color="primary" aria-label="add"
          onClick={ ()=>onClick(index) }>
          <AddIcon />
        </Button>
      </TableCell>
    </TableRow>
  )
}

const SearchRuleItemDetail = ({rule_detail, rule_item}) => {

  if( !rule_detail ) {
    return null;
  }
  return (
    <TableRow>
      <TableCell colSpan={3}>
        <Table>
          <SearchRuleItemDetailTableHeader />
          <TableBody>
            {rule_item.predicates.map(
              (predicate, idx) => (
                <SearchRulePredicate 
                  key={"SearchRulePredicate" + idx.toString()}
                  predicate={predicate}
                />
              )
            )}
          </TableBody>
        </Table>
      </TableCell>
    </TableRow>
  )
}

const SearchRulePredicate = ({predicate}) => {
  return (
    <TableRow>
      <TableCell>
        {predicate.property}
      </TableCell>
      <TableCell>
        {predicate.operator}
      </TableCell>
      <TableCell>
        {predicate.value}
      </TableCell>
    </TableRow>
  )
}

const SearchRuleItemDetailTableHeader = () => {
  return (
    <TableHead>
      <TableRow>
        <TableCell>
          Property
        </TableCell>
        <TableCell>
          Operator
        </TableCell>
        <TableCell>
          Value
        </TableCell> 
      </TableRow>
    </TableHead>
  )
}



let SearchConditionTable = props => {
  return (
    <Table>
      <TableBody>
        {props.property_table.map(
            (property_list, idx) => 
            <SearchConditionRow 
              key={'SearchConditionRow'+idx.toString()}
              property_list={property_list} />
          )
        }
      </TableBody>
    </Table>
  )
};

let SearchConditionRow = props => {
  return (
    <TableRow>
      {props.property_list.map(
          (property_item, idx) => (
            <TableCell
              key={'SearchConditionRowColumn' + idx.toString()}
            >
              <Checkbox 
                color="default" 
                value="checkedG" 
                key={'SearchConditionCheckBox' + idx.toString()}
              />{property_item}              
            </TableCell>
          )
        )
      }
    </TableRow>
  )
}


