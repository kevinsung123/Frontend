
import TableHeader from 'grommet/components/TableHeader';
import Table from 'grommet/components/Table';
import TableRow from 'grommet/components/TableRow';
import React from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import { GridList, GridTile } from 'material-ui/GridList';
import injectTapEventPlugin from 'react-tap-event-plugin';
import img from 'react-image';

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
      name: "",
      age: "",
      birthday: ""
      // prehabilitation={     
      //     pt_class="",  
      //     pt_new="", 
      //     stability="",  
      //     oral_ingestion="",  
      //     ADL="",
      //     KTIS="",
      //     VAS="",
      //     MBI="",
      //     MAS="",
      //     MMT="",
      //     BBS="",
      //     ROM="",
      //     Onset=""
      // },
      // homecare={            //가정간호
      //     hc_class="",        //가정간호환자구분
      //     vital_sign="",       //활력증상
      //     consciousness="",    //의식수준
      //     nutrition="",        //영양
      //     urination="",       //배뇨 및 배변
      //     breathdegree="",    //호흡정도
      //     dailyliving="",     //일상생활수행
      //     emotionalstate="",  //정서상태
      // }
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }




  change = e => {
    this.props.onChange({ [e.tagrget.name]: e.target.value })
    this.setState({
      [e.tagrget.name]: e.tagrget.value
    });
  };
  onSubmit = e => {
    e.preventDefault();
    this.setState({
      name: "",
      age: "",
      birthday: ""

    });
    this.props.onChange({
      name: "",
      age: "",
      birthday: ""
    })

  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert('An essay was submitted: ' + this.state.value);
    event.preventDefault();
  }


  render() {
    return (
      <div style={gridstyles.root}>
        <Paper style={style} zDepth={4} rounded={true}>
          <GridList>
           
            <img 
            width="200px" 
            height="200px" 
            src="/src/img/marc.jpg"
            decode={false}
            />
            <TextField
              name="name"
              hintText="이름"
              floatingLabelText="이름"
              value={this.setState.name}
              onChange={e => this.change(e)}
              floatingLabelFixed={true}
            />
            <TextField
              name="age"
              hintText="나이"
              floatingLabelText="나이"
              value={this.setState.name}
              onChange={e => this.change(e)}
              floatingLabelFixed={true}
            />
            <TextField
              name="brithday"
              hintText="생일"
              floatingLabelText="생일"
              value={this.setState.name}
              onChange={e => this.change(e)}
              floatingLabelFixed={true}
            />
            <br />
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