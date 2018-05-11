import React, {Component} from 'react';
import { PatientSearchList, PatientDetail, PatientSearchTable,PatientAddForm } from '/components/Patients';


export class PatientAddPage extends React.Component {
    state={
        fields: {}
    };
    onChange = updatedValue => {
        this.setState({
            fields: {
                 ...this.state.fields,
                 ...updatedValue
            }
        });
    };
    
    render() {
        return (
            <div>
               <PatientAddForm onChange={fields => this.onChange(fields)}/>
              <p>
                  {JSON.stringify(this.state.fields,null,2)}
              </p>

            </div>
        )
    }
}