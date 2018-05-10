import * as React from 'react'
import { PatientSearchList, PatientDetail, PatientSearchTable } from '/components/Patients';


export class PatientSearchPage extends React.Component {
    render() {
        return (
            <div>
                <PatientSearchTable />
                <PatientSearchList />
            </div>
        )
    }
}