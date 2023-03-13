import React from 'react';
import { connect } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from "../../store/actions";
import './Header.scss';
import { LANGUAGES } from '../../utils/constant'
import { changeLanguageApp } from '../../store/actions';
import { HiOutlineLogout } from 'react-icons/hi';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import { IoMdArrowRoundBack } from 'react-icons/io';

function Header(props) {
    const { processLogout } = props;
    const dispatch = useDispatch()
    let { language } = useSelector(state => state.app)

    const changeLanguage = (language) => {
        dispatch(changeLanguageApp(language))
    }
    return (
        <div className="header-container">
            {/* thanh navigator */}
            <div className="header-tabs-container">
                {/* <Navigator menus={adminMenu} /> */}
                <Link to="/home">
                    <IoMdArrowRoundBack style={{ marginRight: '5px' }} />
                    <FormattedMessage id="home" />
                </Link>

            </div>
            <div className='header_language'>
                <button
                    className={language === LANGUAGES.VI ? "btn active" : "btn"}
                    onClick={() => changeLanguage(LANGUAGES.VI)}>VN</button>
                <span> | </span>
                <button
                    className={language === LANGUAGES.EN ? "btn active" : "btn"} onClick={() => changeLanguage(LANGUAGES.EN)}>EN</button>
                {/* nút logout */}
                <div className="btn btn-logout" onClick={processLogout} title="Log out" style={{ marginLeft: '10px', marginBottom: '2px' }}>
                    <HiOutlineLogout />
                </div>
            </div>

        </div>
    );
}


const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processLogout: () => dispatch(actions.processLogout()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
