import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class LoginForm extends Component {

    state = {
    }

    render () {
        return (
            <section className="main">
            {/* <!-- 로그인폼 --> */}
                <div className="m_login">
                <h3><span><img src={require("../img/main/log_img.png")} alt="" /></span>LOGIN</h3>
                <div className="log_box">
                    <form onSubmit={this.handleSubmit}>
                    <div className="in_ty1">
                        <span><img src={require("../img/main/m_log_i3.png")} alt="" /></span>
                        <input type="text" id="email_val" name="email" placeholder="이메일" onChange={this.handleChange} />
                    </div>
                    <div  className="in_ty1">
                        <span className="ic_2"><img src={require("../img/main/m_log_i2.png")} alt="" /></span>
                        <input type="password" id="pwd_val" name="password" placeholder="비밀번호" onChange={this.handleChange} />
                    </div>
                    <ul className="af">
                        <li><Link to={'/register_check'}>회원가입</Link></li>
                        <li className="pwr_b" onClick={this.pwdResetClick}><a href="#n">비밀번호 재설정</a></li>
                    </ul>
                    {/* <input className="s_bt" type="submit" value="로그인" />	 */}
                    <button className="s_bt" type="submit" onClick={this.submitClick}>로그인</button>
                    </form>
                </div>
                </div>
            {/* <!-- 비밀번호 재설정 --> */}
                <div className="m_login m_pw">
                <h3 className="pw_ls">비밀번호 재설정 <span className="compl1">완료</span></h3>
                <div className="log_box">
            {/* <!-- 1단 --> */}
                    {/* <form method="post"> */}
                    <div className="pw_one">
                        <div className="in_ty1">
                        <span><img src={require("../img/main/m_log_i3.png")} alt="" /></span>
                        <input type="text" id="reset_email_val" name="" placeholder="이메일"/>
                        </div>
                        <div  className="in_ty1">
                        <span className=""><img src={require("../img/main/m_log_i1.png")} alt="" /></span>
                        <input type="text" id="reset_name_val" name="" placeholder="성명"/>
                        </div>
                        <div className="btn_confirm btn_confirm_m">
                        <div className="bt_ty bt_ty_m bt_ty1 cancel_ty1" onClick={this.pwdResetCancleClick}>취소</div>
                        <a href="#n" className="bt_ty bt_ty_m bt_ty2 submit_ty1" onClick={this.pwdResetConfim}>확인</a>
                        </div>
                    </div>
            {/* <!-- 2단 가려둠-->  */}
                    <div className="pw_two">
                        <div className="in_ty1">
                        <span className="ic_2"><img src={require("../img/main/m_log_i2.png")} alt="" /></span>
                        <input type="password" name="" placeholder="새 비밀번호" />
                        </div>
                        <div className="in_ty1">
                        <span className="ic_2"><img src={require("../img/main/m_log_i2.png")} alt="" /></span>
                        <input type="password" name="" placeholder="새 비밀번호 확인" />
                        </div>
                        <div className="btn_confirm btn_confirm_m">
                        <div className="bt_ty bt_ty_m bt_ty1 cancel_ty1">취소</div>
                        <a href="#n" className="bt_ty bt_ty_m bt_ty2 submit_ty1">재설정</a>
                        </div>
                    </div>
            {/* <!-- 3단 가려둠 --> */}
                    <div className="pw_tree">
                        <div className="">
                        <p>
                            '<span>홍길동</span>'
                            님의 비밀번호가 재설정되었습니다.
                        </p>		
                        
                        </div>
                        <input className="s_bt" type="submit" value="로그인 이동" />	
                    </div>
                    {/* </form> */}
                </div>
                </div>
                
            </section>
        );
    }
}

LoginForm.defaultProps = {
}

export default LoginForm;