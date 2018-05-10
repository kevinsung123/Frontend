
import * as React from 'react'
import { NavLink } from 'react-router-dom'


export class SideMenu extends React.Component {
    render() {
        const activeStyle = {
            color: "blue",
            fontSize: "1rem"
        };
        return (
            <div id="aside">
                <div className="submenu">
                    <h2>환자</h2>
                    <ul>
                        <li><NavLink expect to="/patients/search" activeStyle={activeStyle}>검색</NavLink></li>
                        <li><NavLink expect to="/patients/add" activeStyle={activeStyle}>추가/수정</NavLink></li>
                    </ul>
                </div>
                <div className="submenu">
                    <h2>스케쥴관리</h2>
                    <ul>
                        <li><NavLink expect to="/schedules/search" activeStyle={activeStyle}>검색</NavLink></li>
                        <li><NavLink expect to="/schedules/add" activeStyle={activeStyle}>추가/수정</NavLink></li>
                    </ul>
                </div>
                <div className="submenu">
                    <h2>태스크</h2>
                    <ul>
                        <li><NavLink expect to="/tasks/search" activeStyle={activeStyle}>검색</NavLink></li>
                        <li><NavLink expect to="/tasks/add" activeStyle={activeStyle}>추가/수정</NavLink></li>
                    </ul>
                </div>
                <div className="submenu">
                    <h2>속성</h2>
                    <ul>
                        <li><NavLink expect to="/attributes/search" activeStyle={activeStyle}>검색</NavLink></li>
                        <li><NavLink expect to="/attributes/add" activeStyle={activeStyle}>추가/수정</NavLink></li>
                    </ul>
                </div>
            </div>
        )
    }
}
  
