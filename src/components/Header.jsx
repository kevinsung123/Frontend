import * as React from 'react';
import {NavLink,Link} from 'react-router-dom'


export class Header extends React.Component {
    render() {
        return (
            <div class="container width-max-100">
                <nav class="navbar navbar-expand-lg navbar-light bg-light navbar-background">
                    <a class="navbar-brand" href="/">Main</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav mr-auto">
                            <li class="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                   data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    환자 업무
                                </a>

                                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a class="dropdown-item" href="/patients/search">환자 검색</a>
                                    <a class="dropdown-item" href="/patients/add">환자 추가/수정</a>
                                </div>
                            </li>
                            <li class="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                   data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    서비스 규칙
                                </a>

                                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a class="dropdown-item" href="/rules/search">룰 검색</a>
                                    <a class="dropdown-item" href="/rules/add">룰 등록/수정</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}
