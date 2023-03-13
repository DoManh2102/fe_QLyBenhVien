import React from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import System from '../../../../routes/System';
import Header from '../../../Header/Header';
import './SystemLayout.scss'
import { useSelector } from 'react-redux';
import Dropdown from 'react-bootstrap/Dropdown';
import { FormattedMessage } from 'react-intl';
import { routerManage } from '../../../Header/menuApp';


function SystemLayout(props) {
    let { userInfo } = useSelector(state => state.user)
    let { isLoggedIn } = useSelector(state => state.user)

    return (
        <React.Fragment>
            {isLoggedIn && <Header />}
            <div id='layoutSidenav'>
                <div id="layoutSidenav_nav">
                    <nav className="sb-sidenav-dark" >
                        <div className="sb-sidenav-menu">
                            <div className="nav">
                                <div className="sb-sidenav-menu-heading ">
                                    <div className='info_user'>
                                        <img src='https://www.w3schools.com/howto/img_avatar.png' alt='a' />
                                        {userInfo &&
                                            <div className='name_user'>
                                                <h5>{userInfo.lastName} {userInfo.firstName} </h5>
                                                <p>Admin</p>
                                            </div>
                                        }
                                    </div>
                                    <div className="nav-link mt-2" >
                                        <h3>
                                            <FormattedMessage id="menu.admin.management" />
                                        </h3>
                                        <ul className="sb-sidenav-menu-nested ml-3 pl-1 mt-3">
                                            {/* quản lí user */}
                                            <Dropdown>
                                                <Dropdown.Toggle variant="" id="dropdown-basic">
                                                    <FormattedMessage id="menu.admin.user" />
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu>
                                                    <Link to={routerManage.user}>
                                                        <FormattedMessage id="menu.admin.manage-user" />
                                                    </Link>
                                                    <Link to={routerManage.doctor}>
                                                        <FormattedMessage id="menu.admin.manage-doctor" />
                                                    </Link>
                                                </Dropdown.Menu>
                                            </Dropdown>

                                            {/* quản lí phòng khám */}
                                            <Dropdown>
                                                <Dropdown.Toggle variant="" id="dropdown-basic">
                                                    <FormattedMessage id="menu.admin.clinic" />
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu>
                                                    <Link to={routerManage.user}>
                                                        <FormattedMessage id="menu.admin.manage-user" />
                                                    </Link>
                                                </Dropdown.Menu>
                                            </Dropdown>

                                            {/* quản lí chuyên khoa */}
                                            <Dropdown>
                                                <Dropdown.Toggle variant="" id="dropdown-basic">
                                                    <FormattedMessage id="menu.admin.specialty" />
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu>
                                                    <Link to={routerManage.doctor}>
                                                        <FormattedMessage id="menu.admin.manage-specialty" />
                                                    </Link>
                                                </Dropdown.Menu>
                                            </Dropdown>

                                            {/* quản lí cẩm nang */}
                                            <Dropdown>
                                                <Dropdown.Toggle variant="" id="dropdown-basic">
                                                    <FormattedMessage id="menu.admin.handbook" />
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu>
                                                    <Link to={routerManage.doctor}>
                                                        <FormattedMessage id="menu.admin.handbook" />
                                                    </Link>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </ul>
                                    </div>
                                </div>
                                <System />
                            </div>
                        </div>
                    </nav >
                </div >
            </div >
        </React.Fragment >
    );
}



export default connect()(SystemLayout);
