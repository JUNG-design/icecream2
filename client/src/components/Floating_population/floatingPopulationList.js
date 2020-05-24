import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from "axios";

class FloatPopulList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            responseFPList: '',//유동인구 리스트 response 변수
            append_FPList: '', //유동인구 리스트 append 변수
        }
    }

    componentDidMount() {
        this.callFloatPopulListApi()
    }

    // SW Tool 리스트 호출
    callFloatPopulListApi = async () => {
            //SW Tool List 호출
            axios.get('https://api.bigdatahub.co.kr/v1/datahub/datasets/search.json?pid=1002277&TDCAccessKey=f7c857088da5680d9cbbaf992adb71d391250f415151f4fcc7bd0801bb0d7fa4&$count=30', {
            })
            .then( response => {
                try {
                    this.setState({ responseFPList: response });
                    this.setState({ append_FPList: this.FloatPopulListAppend() });
                } catch (error) {
                    alert(error)
                }
            })
            .catch( error => {alert(error);return false;} );
    }

    // SW Tool 리스트 append
    FloatPopulListAppend = () => {
        let result = []
        var FPList = this.state.responseFPList.data
        var jsonString = JSON.stringify(FPList)
        jsonString = jsonString.replace(/\(1시간단위\)/g, '')
        jsonString = jsonString.replace(/\(10세단위\)/g, '')
        var json = JSON.parse(jsonString)

        // alert(FPList.entry[0].일자)
        for(let i=0; i<json.entry.length; i++){
            var data = json.entry[i]
            // alert(JSON.stringify(data))
            var idx = i+1
            result.push(
                <tr class="hidden_type">
                    <td>{idx}</td>
                    <td>{data.일자}</td>
                    <td>{data.시간}</td>
                    <td>{data.연령대}</td>
                    <td>{data.성별}</td>
                    <td>{data.시}</td>
                    <td>{data.군구}</td>
                    <td>{data.유동인구수}</td>
                </tr>
            )
        }
        return result
    }

    render () {
        return (
            <section class="sub_wrap" >
                <article class="s_cnt mp_pro_li ct1 mp_pro_li_admin">
                    <div class="li_top">
                        <h2 class="s_tit1">서울시 유동인구 데이터 - 19년 11월</h2>
                    </div>

                    <div class="list_cont list_cont_admin">
                        <table class="table_ty1 fp_tlist">
                            <tr>
                                <th>Row</th>
                                <th>일자</th>
                                <th>시간</th>
                                <th>연령대</th>
                                <th>성별</th>
                                <th>시</th>
                                <th>군구</th>
                                <th>유동인구수</th>
                            </tr>
                        </table>	
                        <table class="table_ty2 fp_tlist">
                            {this.state.append_FPList}
                        </table>

                        <div className="page_ty1">
                            {this.state.append_paging}
                        </div>
                    </div>
                </article>
            </section>
        );
    }
}

export default FloatPopulList;