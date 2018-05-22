import React from 'react';

import TextField    from '@material-ui/core/TextField';
import Table        from "@material-ui/core/Table";
import TableBody    from "@material-ui/core/TableBody";
import TableRow     from "@material-ui/core/TableRow";
import TableCell    from "@material-ui/core/TableCell";
import TableHead    from "@material-ui/core/TableHead";
import Select       from "@material-ui/core/Select";
import MenuItem     from "@material-ui/core/MenuItem";
import Button       from "@material-ui/core/Button";

import axios from 'axios';

import { VHS_property  } from "../../data";
  

/*const apicall = axios.create({
  baseURL: 'http://localhost:5000/patient',
  responseType: 'json',
  withCredentials: true,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,OPTIONS',
  },
})*/

/*
hc_class: "",        //가정간호환자구분
vital_sign: "",       //활력증상
consciousness: "",    //의식수준
nutrition: "",        //영양
urination: "",       //배뇨 및 배변
breathdegree: "",    //호흡정도
dailyliving: "",     //일상생활수행
emotionalstate: "",  //정서상태
*/

export default class PatientAddForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      medical_property: VHS_property,
      medical_property_values: {}
    };
  }

  handlePropertyValueChange = (event) => {
    let new_medical_property_values = this.state.medical_property_values;
    new_medical_property_values[event.target.name] = event.target.value;

    
    this.setState({
      ...this.state,
      medical_property_values: new_medical_property_values,
    }, ()=>console.log(this.state.medical_property_values))
  }

  /*shouldComponentUpdate(nextProps, nextState) {
    p = this.medical_property_values;
    q = nextState.medical_propersty_values;

    for(let i in p) {
      if(q.hasOwnProperty(i)) {
        if( p[i] !== q[i] ) return false;
      } else return false;
    }
    for(let i in q) {
      if(p.hasOwnProperty(i)) {
        if( p[i] !== q[i] ) return false;
      } else return false;
    }

    return true;
  }*/

  //TODO let TableBody inside Personal Field
  render() {
    return (
      <Table>
        <TableBody>
          <PersonalField />
        </TableBody>
        <MedicalField 
          properties={this.state.medical_property}
          property_values={this.state.medical_property_values}
          handlePropertyValueChange={this.handlePropertyValueChange} />
        
        <TableBody>
          <TableRow>
            <TableCell colSpan={3}>
              <Button variant="raised">
                Submit
              </Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );
  }
}



const PersonalField = () => {
  return (
    <TableRow>
      <TableCell>
        <TextField
          id="patient_name"
          label="Patient Name"
        />
      </TableCell>
      <TableCell>
        <TextField
          id="patient_age"
          label="Patient Age"
        />
      </TableCell>
      <TableCell>
        <TextField
          id="patient_birthday"
          label="Patient Birthday"
        />
      </TableCell>
    </TableRow>
  )
}

const MedicalField = ({properties, property_values, handlePropertyValueChange}) => {
  let i=0;
  let properties_table = []
  for(i=0;i<properties.length;i+=3) {
    properties_table.push( properties.slice(i, i+3) )
  }

  return (
    <TableBody>
    {properties_table.map(
      (properties_list, idx) => (
        <MedicalFieldRow properties_list={properties_list}
          property_values={property_values}
          key={idx}
          handleChange={handlePropertyValueChange}
        />
      )
    )}
    </TableBody>
  )
}

const MedicalFieldRow = ({properties_list, property_values, handleChange=f=>f}) => {

  return (
    <TableRow>
    {properties_list.map(
      (property, idx) => (
        <MedicalFieldItem key={'medical_field' + idx.toString()}
          property={property}
          selected_value={property_values[property.name]}
          handleChange={handleChange}
        />
      )
    )}
    </TableRow>
  )
}

const MedicalFieldItem = ({property, selected_value, handleChange=f=>f}) => {

  if(!selected_value) {
    selected_value = "";
  }

  if(property.type == "category") {
    return (
      <TableCell>
        {property.name}:
        <Select
          value={selected_value} 
          onChange={handleChange}
          inputProps={{
            name:property.name,
            id:property.name
          }}
          >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {property.values.map(
            (value, idx) => (
              <MenuItem 
                key={'medical_field_menu_item' + idx.toString()}
                value={value}>{value}</MenuItem>
            )
          )}
        </Select>
      </TableCell>
    )
  }
  else {
    return (
      <TextField
      id={property.name}
      label={property.name}/>
    )
  }
}