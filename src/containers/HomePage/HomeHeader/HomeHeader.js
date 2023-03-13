import React from 'react';
import './HomeHeader.scss';
import { useDispatch, useSelector } from 'react-redux';
import { FaBars } from 'react-icons/fa';
import { MdOutlineContactSupport } from 'react-icons/md';
import { AiOutlineSearch } from 'react-icons/ai';
import { FormattedMessage } from 'react-intl';
import { LANGUAGES } from '../../../utils/constant'
import { changeLanguageApp } from '../../../store/actions';

function HomeHeader(props) {
    const dispatch = useDispatch()
    let { language } = useSelector(state => state.app)

    const changeLanguage = (language) => {
        dispatch(changeLanguageApp(language))
    }

    return (
        <React.Fragment>
            <header className='home-header-container'>
                <div className='home-header-content'>
                    <div className='header_left_content'>
                        <a className='btn_bars' href='/#'>
                            <FaBars />
                        </a>
                        <div className='header_logo'></div>
                    </div>
                    <div className='header_center_conten'>
                        <ul>
                            <li>
                                <a href='/#'>
                                    <FormattedMessage id="home-header.specialty" />
                                    <span><FormattedMessage id="home-header.searchDoctor" /></span>
                                </a>
                            </li>
                            <li>
                                <a href='/#'>
                                    <FormattedMessage id="home-header.healthFacilities" />
                                    <span><FormattedMessage id="home-header.selectHospital" /></span>
                                </a>
                            </li>
                            <li>
                                <a href='/#'>
                                    <FormattedMessage id="home-header.doctor" />
                                    <span><FormattedMessage id="home-header.selectDoctor" /></span>
                                </a>
                            </li>
                            <li>
                                <a href='/#'>
                                    <FormattedMessage id="home-header.checkupPackage" />
                                    <span><FormattedMessage id="home-header.checkHealth" /></span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className='header_right_conten'>
                        <div className='header_support'>
                            <a className='header_support_logo' href='/#'>
                                <MdOutlineContactSupport />
                            </a>
                            <span style={{ fontWeight: 'bold' }}>  <FormattedMessage id="home-header.support" /></span>
                        </div>
                        <div className='header_language'>
                            <button
                                className={language === LANGUAGES.VI ? "btn active" : "btn"}
                                onClick={() => changeLanguage(LANGUAGES.VI)}>VN</button>
                            <span> | </span>
                            <button
                                className={language === LANGUAGES.EN ? "btn active" : "btn"} onClick={() => changeLanguage(LANGUAGES.EN)}>EN</button>
                        </div>
                    </div>
                </div>
            </header>
            <div className='home-banner'>
                <div className='banner-up'>
                    <div className='banner_title'>
                        <h2 >Nền tảng y tế</h2>
                        <p >Chăm sóc sức khoẻ toàn diện</p>
                    </div>
                    <div className='banner_search'>
                        <AiOutlineSearch style={{ cursor: 'pointer' }} />
                        <input placeholder='Nhập tên bác sĩ' />
                    </div>
                </div>
                <div className='banner-down'>
                    <div className='banner_options'>
                        <div>
                            <div className='img_option'></div>
                            <br />
                            <a href='/#'>
                                Khám
                                <br />
                                Chuyên khoa
                            </a>
                        </div>
                        <div>
                            <div className='img_option'></div>
                            <br />
                            <a href='/#'>
                                Khám
                                <br />
                                từ xa
                            </a>
                        </div>
                        <div>
                            <div className='img_option'></div>
                            <br />
                            <a href='/#'>
                                Khám
                                <br />
                                tổng quan
                            </a>
                        </div>
                        <div>
                            <div className='img_option'></div>
                            <br />
                            <a href='/#'>
                                Sức khoẻ
                                <br />
                                tinh thần
                            </a>
                        </div>
                        <div>
                            <div className='img_option'></div>
                            <br />
                            <a href='/#'>
                                Khám
                                <br />
                                nha khoa
                            </a>
                        </div>
                        <div>
                            <div className='img_option'></div>
                            <br />
                            <a href='/#'>
                                Gói
                                <br />
                                Phẫu thuật
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </React.Fragment>
    );
}

export default HomeHeader;