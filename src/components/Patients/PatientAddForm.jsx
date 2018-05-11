
import TableHeader from 'grommet/components/TableHeader';
import Table from 'grommet/components/Table';
import TableRow from 'grommet/components/TableRow';
import React from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import { GridList, GridTile } from 'material-ui/GridList';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Img from 'react-image';
import avatar from './img/marc.jpg';
import RaisedButton from 'material-ui/RaisedButton';
import PatientAddTab from './PatientAddTab';

//injectTapEventPlugin();
const style = {
  height: '100%',
  width: '80%',
  margin: 20,
  textAlign: 'center',

};

const gridstyles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 500,
    height: 450,
    overflowY: 'auto',
  },
};
export default class PatientAddForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      patientname: "",
      age: "",
      birthday: "",
      prehabilitation: {
        pt_class: "",
        pt_new: "",
        stability: "",
        oral_ingestion: "",
        ADL: "",
        KTIS: "",
        VAS: "",
        MBI: "",
        MAS: "",
        MMT: "",
        BBS: "",
        ROM: "",
        Onset: ""
      },
      homecare: {            //가정간호
        hc_class: "",        //가정간호환자구분
        vital_sign: "",       //활력증상
        consciousness: "",    //의식수준
        nutrition: "",        //영양
        urination: "",       //배뇨 및 배변
        breathdegree: "",    //호흡정도
        dailyliving: "",     //일상생활수행
        emotionalstate: "",  //정서상태
      }
    };


  }




  change = e => {
    this.props.onChange({ [e.target.name]: e.target.value })
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  onSubmit = e => {
    e.preventDefault();
    this.setState({
      patientname: "",
      age: "",
      birthday: ""

    });
    this.props.onChange({
      patientname: "",
      age: "",
      birthday: ""
    })

  }



  render() {
    return (
      <div style={gridstyles.root}>
        <Paper style={style} zDepth={4} rounded={true}>

          <GridList>
            <img
              width="200px"
              height="150px"
              src="https://creativetimofficial.github.io/material-dashboard-react/static/media/marc.8880a65c.jpg"
            />
            <TextField
              name="patientname"
              floatingLabelText="이름"
              value={this.state.patientname}
              onChange={e => this.change(e)}
              floatingLabelFixed={true}
            />
            <TextField
              name="age"
              hintText=""
              floatingLabelText="나이"
              value={this.state.age}
              onChange={e => this.change(e)}
              floatingLabelFixed={true}
            />

            <TextField
              name="birthday"
              hintText=""
              floatingLabelText="생년월일"
              value={this.state.birthday}
              onChange={e => this.change(e)}
              floatingLabelFixed={true}
            />
            <br />
            <RaisedButton label="환자등록" onClick={e => this.onSubmit(e)} primary />
          </GridList>
  
        </Paper>
      </div>
    );
  }

}


// export default class PatientAddForm extends React.Component {
// constructor(props) {
//     super(props);
//     this.state = {
//       value: ""
//     };

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(event) {
//     this.setState({value: event.target.value});
//   }

//   handleSubmit(event) {
//     alert('An essay was submitted: ' + this.state.value);
//     event.preventDefault();
//   }

//   render() {
//     return (
//       <div>
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Essay:
//           <textarea value={this.state.value} onChange={this.handleChange} />
//         </label>
//         <input type="submit" value="Submit" />
//       </form>
//       <h1>test</h1>
//       </div>
//     );
//   }
// }