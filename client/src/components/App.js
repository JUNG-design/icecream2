import React, { Component } from "react";
import { Router, Route, Switch } from "react-router";

import Api_test from "./Api_test";

// css
import "../css/new.css";
import "../css/owl.carousel.min.css";
import "../css/owl.theme.default.min.css";

// header
import HeaderAdmin from "./Header/Header admin";

// footer
import Footer from "./Footer/Footer";

// login
import LoginForm from "./LoginForm";

// admin floatingPopulationList
import floatingPopulationList from "./Floating_population/floatingPopulationList";

// admin softwareinfo
import AdminSoftwareList from "./SoftwareToolsManage/AdminSoftwareList";
import AdminSoftwareView from "./SoftwareToolsManage/AdminSoftwareView";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  componentDidMount() {}
  render() {
    return (
      <div className="App">
        <HeaderAdmin />
        <Switch>
          {/* <Route exact path='/' component={Api_test} /> // root 경로일 경우 라우팅 */}
          <Route exact path="/" component={LoginForm} />
          <Route path="/Api_test" component={Api_test} />
          <Route
            path="/floatPopulationList"
            component={floatingPopulationList}
          />
          <Route path="/AdminSoftwareList" component={AdminSoftwareList} />
          <Route
            path="/AdminSoftwareView/:swtcode"
            component={AdminSoftwareView}
          />
        </Switch>
        <Footer
          footer_address={this.props.footer_address}
          footer_tel={this.props.footer_tel}
          footer_email={this.props.footer_email}
          footer_mobile={this.props.footer_mobile}
        />
      </div>
    );
  }
}

App.defaultProps = {
  // footer value
  footer_address: "[34234] 서울특별시 강남구 삼성동 111-114",
  footer_tel: "02-1234-5678",
  footer_email: "ljung5@naver.com",
  footer_mobile: "010-3288-3398",
};

export default App;
