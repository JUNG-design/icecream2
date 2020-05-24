import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount() {

    }


    render () {
        return(
            <header className="gnb_box">
                    <div className="hd_top">
                        <div className="top_wrap ct1 af">
                        <ul className="hd_left af">
                            <li className="my1" onMouseEnter={this.myInfoHover} onMouseLeave={this.myInfoLeave}><b>내정보</b>
                            <div className="box0 box1">
                                <ul>
                                <li><Link to={'/register'}>내 정보 수정</Link></li>
                                <li><a href="javascript:" onClick={this.logout}>로그아웃</a></li>
                                </ul>
                            </div>
                            </li>
                            <li  className="my2" onMouseEnter={this.alarmHover} onMouseLeave={this.alarmLeave}><b><span>{this.state.notice_cnt}</span>알림</b>
                            <div className="box0 box2">
                                <ul className="al_box">
                                    {this.state.append_NoticeFld}
                                </ul>
                                <span className="bt_ty1">
                                <a href="javascript:" onClick={this.deleteNotice}>알림 모두 제거</a>
                                </span>
                            </div>
                            </li>
                        </ul>
                        <div className="hd_right">
                            <p><span>'{this.state.admin_usernm}'</span>님 반갑습니다.</p>
                        </div>
                        </div>
                    </div>
                <div className="h_nav ct1 af">
                    <div className="logo">
                        <Link to={'/admin'}><img src={require("../../img/layout/logo.jpg")} height="65px" width="200px" alt=""/></Link>
                    </div>
                    <nav className="gnb gnb_admin">
                    <ul className="af">
                        <li>
                            <Link to={'/UserApproval'}>사용자 관리</Link>
                        </li>
                        <li>
                            <Link to={'/AdminResearchProject'}>Research Projects 관리</Link>
                        </li>
                        <li>
                            <Link to={'/AdminSoftwareList'}>Software Tools 관리</Link>
                        </li>
                        <li>
                            <Link to={'/AdminDataSourceList'}>Data Sources 관리</Link>
                        </li>
                        {/* 드롭다운 이벤트 */}
                        <li onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave} ><Link to={'/floatPopulationList'}>유동인구 조회</Link>
                        <ul className="gn_2">
                            <li><Link to={'/community/notice'}>공지사항</Link></li>
                        </ul>
                        </li>
                        <li>
                            <Link to={'/SubCodeManage'}>Sub code 관리</Link>
                        </li>
                    </ul>
                    </nav>
                </div>
            </header>
        );
    }
}

export default Header;