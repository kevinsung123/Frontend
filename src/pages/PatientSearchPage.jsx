import * as React from 'react'
import { PatientDetail, PatientSearchTable } from '/components/Patients';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

export class PatientSearchPage extends React.Component {
    render() {
        return (
            <div>
                <PatientSearchTable />

            </div>
        )
    }
}