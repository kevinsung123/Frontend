
import TableHeader from 'grommet/components/TableHeader';
import Table from 'grommet/components/Table';
import TableRow from 'grommet/components/TableRow';
import React from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import injectTapEventPlugin from 'react-tap-event-plugin';


export default class PatientAddForm extends React.Component {
constructor(props) {
    super(props);
    this.state = {
      value: 'Please write an essay about your favorite DOM element.'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('An essay was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Essay:
          <textarea value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
// export default class PatientAddForm extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             name: "",
//             age: "",
//             birthday: "",
//             prehabilitation={     
//                 pt_class="",  
//                 pt_new="", 
//                 stability="",  
//                 oral_ingestion="",  
//                 ADL="",
//                 KTIS="",
//                 VAS="",
//                 MBI="",
//                 MAS="",
//                 MMT="",
//                 BBS="",
//                 ROM="",
//                 Onset=""
//             },
//             homecare={            //가정간호
//                 hc_class="",        //가정간호환자구분
//                 vital_sign="",       //활력증상
//                 consciousness="",    //의식수준
//                 nutrition="",        //영양
//                 urination="",       //배뇨 및 배변
//                 breathdegree="",    //호흡정도
//                 dailyliving="",     //일상생활수행
//                 emotionalstate="",  //정서상태
//             }
//         };

//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }




//     // change = e =>{
//     //     this.props.onChange({  [e.tagrget.name]: e.target.value })
//     //     this.setState({
//     //         [e.tagrget.name]: e.tagrget.value
//     //     });
//     // };
//     // onSubmit=e =>{
//     //     e.preventDefault();
//     //     this.setState({
//     //         name= "",
//     //         age="",
//     //         birthday=""

//     //     });
//     //     this.props.onChange({
//     //         name= "",
//     //         age="",
//     //         birthday="",
//     //     })

//     // }
//     handleChange(event) {
//         this.setState({ value: event.target.value });
//     }

//     handleSubmit(event) {
//         alert('An essay was submitted: ' + this.state.value);
//         event.preventDefault();
//     }


//     render() {
//         return (
//             <form onSubmit={this.handleSubmit}>
//                 <label>
//                     이름:
//               <textarea value={this.state.value} onChange={this.handleChange} />
//                 </label>
//                 <input type="submit" value="Submit" />
//             </form>
//             // <TextField
//             // name="name"
//             // hintText="이름"
//             // floatingLabelText="이름"
//             // value={this.setState.name}
//             // onChange={e=>this.change(e)}
//             // floatingLabelFixed={true}
//             // />
//             // <br/>
//             // <TextField
//             // name="name"
//             // hintText="이름"
//             // floatingLabelText="이름"
//             // value={this.setState.name}
//             // onChange={e=>this.change(e)}
//             // floatingLabelFixed={true}
//             // />
//             // <br/>

//         );
//     }

// }
