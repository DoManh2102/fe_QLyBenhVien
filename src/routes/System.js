import React, { Component } from 'react';
import { connect } from "react-redux";
import { Redirect, Route, Switch } from 'react-router-dom';
import ProductManage from '../containers/System/ProductManage';
import RegisterPackageGroupOrAcc from '../containers/System/RegisterPackageGroupOrAcc';
import UserManage from '../containers/System/Admin/UserManage/UserManage';
import CreateDetailtDoctor from '../containers/System/Admin/Doctor/CreateDetailtDoctor';
import { routerManage } from '../containers/Header/menuApp';


class System extends Component {
    render() {
        const { systemMenuPath } = this.props;
        return (
            <>
                <div className="system-container">
                    <div className="system-list">
                        <Switch>
                            <Route path={routerManage.user} component={UserManage} />
                            <Route path={routerManage.doctor} component={CreateDetailtDoctor} />
                            <Route path="/system/product-manage" component={ProductManage} />
                            <Route path="/system/register-package-group-or-account" component={RegisterPackageGroupOrAcc} />
                            <Route component={() => { return (<Redirect to={systemMenuPath} />) }} />
                        </Switch>
                    </div>
                </div>
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        systemMenuPath: state.app.systemMenuPath,
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(System);
