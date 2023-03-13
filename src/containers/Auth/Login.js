import React, { useState } from 'react';
import { connect } from 'react-redux';
import './Login.scss';
import { useDispatch } from 'react-redux';
import { FaFacebookF } from 'react-icons/fa';
import { AiOutlineGooglePlus } from 'react-icons/ai';
import { AiOutlineEye } from 'react-icons/ai';
import { AiOutlineEyeInvisible } from 'react-icons/ai';
import { handleLoginService } from '../../services/userService';
import { userLoginSuccerss } from '../../store/actions';


function Login(props) {
    const dispatch = useDispatch()

    const [isShowPassword, setIsShowPassword] = useState(false);

    const [valueLogin, setValueLogin] = useState({
        email: '',
        password: '',
        errMessage: ''
    })

    const handleChangeLogin = (e) => {
        const { value, name } = e.target;
        setValueLogin({
            ...valueLogin,
            [name]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { email, password } = valueLogin
        try {
            const isLogin = await handleLoginService(email, password)
            if (isLogin) {
                //set lại errMessage 
                setValueLogin({
                    ...valueLogin,
                    errMessage: isLogin.message
                })
                // đăng nhập thành công => lưu thông tin user vào reducer
                isLogin.errCode === 0 && await dispatch(userLoginSuccerss(isLogin.userLogin))
            }
        } catch (error) {
            if (error.response) {
                if (error.response.data) {
                    setValueLogin({
                        ...valueLogin,
                        errMessage: error.response.data.message
                    })
                }
            }
        }
    }

    const handleShowPassword = () => {
        setIsShowPassword(!isShowPassword)
    }

    return (
        <section className="vh-100 gradient-custom">
            <div className="container pb-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div className="card bg-dark text-white" style={{ borderRadius: '1rem' }}>
                            <form className="card-body p-5">
                                <div className="mb-md-5 mt-md-4 pb-5">
                                    <h2 className="fw-bold mb-2 text-uppercase text-center">Login</h2>
                                    <p className="text-white-50 mb-5 text-center">Please enter your login and password!</p>
                                    <div className="form-outline form-white mb-4">
                                        <label className="form-label" htmlFor="typeEmailX">Email</label>
                                        <input
                                            type="email" id="typeEmailX"
                                            className="form-control form-control-lg"
                                            placeholder='Enter your email'
                                            name="email"
                                            value={valueLogin.email}
                                            onChange={(e) => handleChangeLogin(e)}
                                        />
                                    </div>
                                    <div className="form-outline form-white mb-4">
                                        <label className="form-label" htmlFor="typePasswordX">Password</label>
                                        <div className='custom-form-password'>
                                            <input id="typePasswordX" className="form-control form-control-lg"
                                                placeholder='Enter your password'
                                                type={isShowPassword ? 'text' : 'password'}
                                                value={valueLogin.password}
                                                name="password"
                                                onChange={(e) => handleChangeLogin(e)}
                                            />
                                            <span onClick={() => handleShowPassword()} className='eye-password'>
                                                {isShowPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
                                            </span>
                                        </div>
                                    </div>
                                    <p className="" style={{ color: 'red' }}> {valueLogin.errMessage}</p>
                                    <p className="small mb-5 pb-lg-2"><a className="text-white-50" href="#!">Forgot password?</a></p>
                                    <div className='text-center'>
                                        <button className="btn_login btn" type="submit" onClick={(e) => handleSubmit(e)}>Login</button>
                                    </div>
                                    <div className="login_logo d-flex justify-content-center text-center mt-4 pt-1">
                                        <a href="#!" className="logo_facebook" >
                                            <FaFacebookF />
                                        </a>
                                        <a href="#!" className="logo_google"
                                        >
                                            <AiOutlineGooglePlus />
                                        </a>
                                    </div>
                                </div>
                                <div>
                                    <p className="mb-0 text-center">Don't have an account? <a href="#!" className="text-white-50 fw-bold">Sign Up</a>
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div >
        </section >
    );
}

const mapStateToProps = state => {
    return {
        lang: state.app.language
    };
};

// const mapDispatchToProps = dispatch => {
//     return {
//         navigate: (path) => dispatch(push(path)),
//         userLoginSuccerss: (userInfo) => dispatch(actions.userLoginSuccerss(userInfo))
//     };
// };

export default connect(mapStateToProps)(Login);
