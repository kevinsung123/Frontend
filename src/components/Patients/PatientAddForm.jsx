
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
  height: '15%',
  width: '90%',
  textAlign: 'center',

};

const gridstyles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: { 
    color:"black",
    fontWeight:"bold",
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
      // prehabilitation: {
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
        Onset: "",
      // },
      // homecare: {            //가정간호
        hc_class: "",        //가정간호환자구분
        vital_sign: "",       //활력증상
        consciousness: "",    //의식수준
        nutrition: "",        //영양
        urination: "",       //배뇨 및 배변
        breathdegree: "",    //호흡정도
        dailyliving: "",     //일상생활수행
        emotionalstate: "",  //정서상태
      // }
    };


  }




  change = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  onSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({
      patientname: "",
      age: "",
      birthday: ""
    });
   
  }



  render() {
    return (
      <div style={gridstyles.root}>
        <Paper style={style} zDepth={2} rounded={true}>
          <GridList style={gridstyles.gridList} cols="6" cellsHeight="auto">
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
            <TextField
              name="pt_class"
              hintText="ex) CNS"
              floatingLabelText="방문재활 환자구분 "
              value={this.state.pt_class}
              onChange={e => this.change(e)}
              floatingLabelFixed={true}
            />
            <TextField
              name="pt_new"
              hintText="ex) Y or N"
              floatingLabelText="방문재활 신규여부 "
              value={this.state.pt_class}
              onChange={e => this.change(e)}
              floatingLabelFixed={true}
            />
            <TextField
              name="ADL"
              hintText="ex) < 35"
              floatingLabelText="ADL"
              value={this.state.ADL}
              onChange={e => this.change(e)}
              floatingLabelFixed={true}
            />
            <TextField
              name="KTIS"
              hintText="ex) < 16"
              floatingLabelText="K-TIS"
              value={this.state.KTIS}
              onChange={e => this.change(e)}
              floatingLabelFixed={true}
            />
            <TextField
              name="VAS"
              hintText=" ex) >= 3"
              floatingLabelText="VAS"
              value={this.state.VAS}
              onChange={e => this.change(e)}
              floatingLabelFixed={true}
            />
            <TextField
              name="MBI"
              hintText="ex) >= 3"
              floatingLabelText="MBI "
              value={this.state.MBI}
              onChange={e => this.change(e)}
              floatingLabelFixed={true}
            />
            <TextField
              name="MMT"
              hintText="ex) >= 3"
              floatingLabelText="MMT"
              value={this.state.MMT}
              onChange={e => this.change(e)}
              floatingLabelFixed={true}
            />
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