import * as React from 'react'
//import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import 'bootstrap/dist/css/bootstrap-grid.css';
import '../app.sass'

const styles = {
    //fontFamily: 'Do Hyeon'
};


const STATS = [
    {service_name: '가정간호', tasks: [
        {task_name: '방문복지', selected: true, reserved: 1, waiting: 1, doing: 1},
        {task_name: '주치의 자문', selected: false, reserved: 1, waiting: 1, doing: 1},
        {task_name: '환자 및 보호자 예방 교육', selected: false, reserved: 1, waiting: 1, doing: 1}
    ]}, 
    {service_name: '방문보장구', tasks: [
        {task_name: '수리', selected: false, reserved: 1, waiting: 1, doing: 1},
        {task_name: '훈련', selected: false, reserved: 1, waiting: 1, doing: 1}
    ]}, 
    {service_name: '방문재활', tasks: [
        {task_name: '재활', selected: false, reserved: 1, waiting: 1, doing: 1}
    ]}
]

export class MainPage extends React.Component {
    render() {
        return (
            <Paper>
            <div>
                <div className="table-head row">
                    <div className='col-lg-1'></div>
                    <div className='table-cell col-lg-2'>서비스명</div>
                    <div className='table-cell col-lg-2'>태스크명</div>
                    <div className='table-cell col-lg-2'>예약 대기 환자 수</div>
                    <div className='table-cell col-lg-2'>진료 대기 수</div>
                    <div className='table-cell col-lg-2'>진행중 수</div>
                </div>
                <div className="table-body">
                    { STATS.map(
                        (data,idx) =>
                        <div className="row " key={"fdiv" + idx.toString()}>
                            <div className="col-lg-1" key={"sdiv" + idx.toString()}></div>
                            <div className='col-lg-2 row-id' key={"tdiv" + idx.toString()}>{data.service_name}</div>
                            <div className='col-lg-8 nested-wrap' key={"fdiv" + idx.toString()}>
                            { 
                                data.tasks.map((col,idx) => 
                                    (<div key={"ddiv" + idx.toString()} className={"row " + (col.selected ? 'selected-col' : 'idle-col')}>
                                        <div key={"d1div" + idx.toString()} className='table-cell col-lg-3'>{col.task_name}</div>
                                        <div key={"d2div" + idx.toString()} className='table-cell col-lg-3'>{col.reserved}</div>
                                        <div key={"d3div" + idx.toString()} className='table-cell col-lg-3'>{col.waiting}</div>
                                        <div key={"d4div" + idx.toString()} className='table-cell col-lg-3'>{col.doing}</div>
                                    </div>)
                                ) 
                            }</div>
                        </div>)
                    }
                </div>
            </div>
            </Paper>
        )
    }
}