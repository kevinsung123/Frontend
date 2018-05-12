import React from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';
import Paper from 'material-ui/Paper';
import {
  PatientSearchList,
  PatientDetail,
  PatientSearchTable, 
  PatientAddForm,
  PatientAddTable
} from '/components/Patients';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};
export default class PatientAddTab extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

      value: 'a'
    };

  }




  handleChange = (value) => {
    this.setState({
      value: 'a',
    });
  };

  render() {
    return (


      <Tabs
        value={this.state.value}
        onChange={this.handleChange}
      >
        <Tab label="환자상세정보" value="a">
          <div>
            <h2 style={styles.headline}></h2>
            <p>
              
            </p>
          </div>
        </Tab>
        <Tab label="추천 서비스" value="b">
          <div>
            <h2 style={styles.headline}></h2>
            <p>
              추천서비스
            </p>
          </div>
        </Tab>
      </Tabs>

    );
  }
}
