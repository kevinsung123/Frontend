
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
injectTapEventPlugin();
const style = {
  height: '100%',
  width: '70%',
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
      pname: "",
      age: "",
      birthday: "",
      prehabilitation:{     
          pt_class:"",  
          pt_new:"", 
          stability:"",  
          oral_ingestion:"",  
          ADL:"",
          KTIS:"",
          VAS:"",
          MBI:"",
          MAS:"",
          MMT:"",
          BBS:"",
          ROM:"",
          Onset:""
      },
      homecare:{            //가정간호
          hc_class:"",        //가정간호환자구분
          vital_sign:"",       //활력증상
          consciousness:"",    //의식수준
          nutrition:"",        //영양
          urination:"",       //배뇨 및 배변
          breathdegree:"",    //호흡정도
          dailyliving:"",     //일상생활수행
          emotionalstate:"",  //정서상태
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
      pname: "",
      age: "",
      birthday: ""

    });
    this.props.onChange({
      pname: "",
      age: "",
      birthday: ""
    })

  }
 


  render() {
    return (
      <div style={gridstyles.root}>
        <Paper style={style} zDepth={4} rounded={true}>
        <form>
          <GridList>  
            <img
            width="200px"
            height="200px"
              src="https://creativetimofficial.github.io/material-dashboard-react/static/media/marc.8880a65c.jpg"
            /> 
            <br/>
            <TextField
              pname="name"
              floatingLabelText="이름"
              value={this.setState.pname}
              onChange={e => this.change(e)}
              floatingLabelFixed={true}
            />
            <TextField
              name="age"
              hintText=""
              floatingLabelText="나이"
              value={this.setState.age}
              onChange={e => this.change(e)}
              floatingLabelFixed={true}
            />
            <TextField
              name="brithday"
              hintText=""
              floatingLabelText="생년월일"
              value={this.setState.birthday}
              onChange={e => this.change(e)}
              floatingLabelFixed={true}
            />
            <br />
            <button onClick={e => this.onSubmit(e)}>환자등록</button>
          </GridList>
          </form>
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