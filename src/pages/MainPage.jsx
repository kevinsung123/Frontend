import * as React from 'react'
import 'bootstrap/dist/css/bootstrap-grid.css'
import Paper from 'material-ui/Paper';

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
    constructor(){
        super();

        this.state = {
             color_black: true
        }
   }

   changePage(){
        window.open('/patients/add', '_self')
   }

    render() {
        return (
            <Paper>
                <div>
              <button onClick={this.changePage.bind(this)}>
                환자 추가
              </button>
        </div>
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
                    { STATS.map(data =>
                        <div className="row ">
                            <div className="col-lg-1"></div>
                            <div className='col-lg-2 row-id'>{data.service_name}</div>
                            <div className='col-lg-8 nested-wrap'>
                            { 
                                data.tasks.map(col => 
                                    (<div className={"row " + (col.selected ? 'selected-col' : 'idle-col')}>
                                        <div className='table-cell col-lg-3'>{col.task_name}</div>
                                        <div className='table-cell col-lg-3'>{col.reserved}</div>
                                        <div className='table-cell col-lg-3'>{col.waiting}</div>
                                        <div className='table-cell col-lg-3'>{col.doing}</div>
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