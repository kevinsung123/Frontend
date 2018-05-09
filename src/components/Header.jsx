import * as React from 'react';
import {NavLink,Link} from 'react-router-dom'


export class Header extends React.Component {
    render() {
        return (
            <div class="page-header" >
                <h1 id="header-left">
                    <NavLink to="/">MAIN</NavLink>
                </h1>
                <h2 id="header-right">
                    IMSAFE 중앙보훈병원
                </h2>
            </div>
        );
    }
}
