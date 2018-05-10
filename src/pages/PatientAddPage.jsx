import * as React from 'react'
import { PatientSearchList, PatientDetail, PatientSearchTable,PatientAddForm } from '/components/Patients';


export class PatientAddPage extends React.Component {
    render() {
        return (
            <div>
               <PatientAddForm/>
              
            </div>
        )
    }
}