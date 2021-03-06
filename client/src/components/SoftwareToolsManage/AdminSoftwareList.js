import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from "axios";
import Swal from 'sweetalert2'

class SoftwareList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            responseSwtoolList: '',//swtool 리스트 response 변수
            append_SwtoolList: '', //swtool 리스트 append 변수
        }
    }

    componentDidMount() {
        // SW Tool 리스트 호출
        this.callSwToolListApi()
    }

    // SW Tool 리스트 호출
    callSwToolListApi = async () => {
        //SW Tool List 호출
        axios.post('/api/Swtool?type=list', {
        })
        .then( response => {
            try {
                this.setState({ responseSwtoolList: response });
                this.setState({ append_SwtoolList: this.SwToolListAppend() });
            } catch (error) {
                alert('작업중 오류가 발생하였습니다.');
            }
        })
        .catch( error => {alert('작업중 오류가 발생하였습니다.');return false;} );
    }

    // SW Tool 리스트 append
    SwToolListAppend = () => {
        let result = []
        var SwToolList = this.state.responseSwtoolList.data
        
        for(let i=0; i<SwToolList.json.length; i++){
            var data = SwToolList.json[i]

            var date = data.reg_date
            var year = date.substr(0,4)
            var month = date.substr(4,2)
            var day = date.substr(6,2)
            var reg_date = year +'.'+month+'.'+day

            result.push(
                <tr class="hidden_type">
                    <td>{data.swt_toolname}</td>
                    <td>{data.swt_function}</td>
                    <td>{reg_date}</td>
                    <td>
                        <Link to={'/AdminSoftwareView/'+data.swt_code} className="bt_c1 bt_c2 w50_b">수정</Link>
                        <a href="#n" class="bt_c1 w50_b" id={data.swt_code} toolname={data.swt_toolname} onClick={(e) => this.deleteSwtool(e)}>삭제</a>
                    </td>
                </tr>
            )
        }
        return result
    }

    // 리스트에서 툴삭제
    deleteSwtool = (e) => {
        //삭제 권한 부여
        var event_target = e.target
        var tmp_this = this
        this.sweetalertDelete('정말 삭제하시겠습니까?', function() {
            axios.post('/api/Swtool?type=delbefore', {
                is_SwtCd : event_target.getAttribute('id')
            })
            .then( response => {
                tmp_this.callSwToolListApi()
            })
        })
    }

    //alert 삭제 함수
    sweetalertDelete = (title, callbackFunc) => {
        Swal.fire({
            title: title,
            text: "",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes'
          }).then((result) => {
            if (result.value) {
              Swal.fire(
                'Deleted!',
                '삭제되었습니다.',
                'success'
              )
            }else{
                return false;
            }
            callbackFunc()
          })
    }

    render () {
        return (
            <section class="sub_wrap" >
                <article class="s_cnt mp_pro_li ct1 mp_pro_li_admin">
                    <div class="li_top">
                        <h2 class="s_tit1">Software Tools 목록</h2>
                        <div class="li_top_sch af">
                        <Link to={'/AdminSoftwareView/register'} className="sch_bt2 wi_au">Tool 등록</Link>
                        </div>
                    </div>

                    <div class="list_cont list_cont_admin">
                        <table class="table_ty1 ad_tlist">
                            <tr>
                                <th>툴 이름</th>
                                <th>기능</th>
                                <th>등록일</th>
                                <th>기능</th>
                            </tr>
                        </table>	
                        <table class="table_ty2 ad_tlist">
                            {this.state.append_SwtoolList}
                        </table>
                    </div>
                </article>
            </section>
        );
    }
}

export default SoftwareList;