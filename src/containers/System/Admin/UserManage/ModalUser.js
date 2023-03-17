import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Button, Form, Input } from 'antd';
import './ModalUser.scss';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { ImUpload3 } from 'react-icons/im';
import { FormattedMessage } from 'react-intl';
import { getAllCodeService } from '../../../../services/allCode';
import { LANGUAGES, CRUD_ACTION } from '../../../../utils/constant';
import { useSelector } from 'react-redux';
import CommonUtils from '../../../../utils/CommonUtils';

function ModalUser(props) {
    let { language } = useSelector(state => state.app)
    const { showModal, handleClose, createNewUser, typeModal, updateUser, showModalUser } = props;
    const [allCode, setAllCode] = useState([])
    const [valueInput, setValueInput] = useState({
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        address: '',
        phoneNumber: '',
        gender: 'M',
        roleId: 'R2',
        positionId: 'P0',
        image: '',
        imageUrl: ''
    })

    useEffect(() => {
        getAllCode();
    }, [])

    // khi typeModal.userEdit thay đổi => setValueInput
    useEffect(() => {
        typeModal && typeModal.userEdit && setValueInput(typeModal.userEdit)
    }, [typeModal.userEdit])

    const getAllCode = async () => {
        const allCode = await getAllCodeService();
        setAllCode(allCode.getAllCode)
    }

    const handleChangeInput = (e) => {
        const { value, name } = e.target;
        setValueInput({
            ...valueInput,
            [name]: value,
        })
    }

    const handleChangeFileUploadAvata = async (e) => {
        let file = e.target.files[0]
        if (file) {
            const imgUrl = URL.createObjectURL(file)
            let base64 = await CommonUtils.getBase64(file)
            setValueInput({
                ...valueInput,
                imageUrl: imgUrl,
                image: base64
            })
        }
    }

    const validMissingInput = (arrInput) => {
        if (!arrInput) return false;
        let isValid = true;
        for (let i = 0; i < arrInput.length; i++) {
            if (!valueInput[arrInput[i]]) {
                isValid = false;
                alert('Missing parameter: ' + arrInput[i])
                break;
            }
        }
        return isValid;
    }

    const handleAddNewUser = () => {
        let arrInput = ['email', 'password', 'firstName', 'lastName', 'address'];
        const isValid = validMissingInput(arrInput);
        if (isValid) {
            handleClose(); //đóng modal
            setTimeout(() => { // modal đóng mới thực hiện createNewUser
                createNewUser(valueInput)
            }, 200)
            setValueInput('')
        }
    }

    const handleUpdateUser = () => {
        let arrInput = ['email', 'firstName', 'lastName', 'address'];
        const isValid = validMissingInput(arrInput);
        if (isValid) {
            handleClose(); //đóng modal
            setTimeout(() => { // modal đóng mới thực hiện updateUser
                updateUser(valueInput)
            }, 200)
            setValueInput('')
        }
    }

    return (
        <>
            <Button className="btn btn-primary my-2 px-2" onClick={() => showModalUser(valueInput, CRUD_ACTION.CREATE)}>
                <FormattedMessage id='modal_manageUser.add' />
            </Button>
            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header >
                    <Modal.Title>
                        <FormattedMessage id='modal_manageUser.add' />
                    </Modal.Title>
                    <button className='btn btn-close' onClick={handleClose}>
                        <AiOutlineCloseCircle />
                    </button>
                </Modal.Header>
                <Modal.Body className='mt-3'>
                    <Form >
                        <div className='row'>
                            <div className='form-item col-6'>
                                <label>
                                    <FormattedMessage id='modal_manageUser.email' />
                                </label>
                                {typeModal && typeModal.btnSubmit === 'update' ?
                                    <Input name="email" disabled
                                        value={valueInput.email}
                                        onChange={(e) => handleChangeInput(e)} />
                                    :
                                    <Input name="email"
                                        value={valueInput.email}
                                        onChange={(e) => handleChangeInput(e)} />
                                }
                            </div>
                            <div className='form-item col-6'>
                                <label>
                                    <FormattedMessage id='modal_manageUser.password' />
                                </label>
                                {typeModal && typeModal.btnSubmit === 'update' ?
                                    <Input type='password' name="password" disabled
                                        value='hashPassword'
                                        onChange={(e) => handleChangeInput(e)} />
                                    :
                                    <Input type='password' name="password"
                                        value={valueInput.password}
                                        onChange={(e) => handleChangeInput(e)} />
                                }
                            </div>
                        </div>
                        <div className='row'>
                            <div className='form-item col-6'>
                                <label>
                                    <FormattedMessage id='modal_manageUser.firstName' />
                                </label>
                                <Input name="firstName"
                                    value={valueInput.firstName}
                                    onChange={(e) => handleChangeInput(e)} />
                            </div>
                            <div className='form-item col-6'>
                                <label>
                                    <FormattedMessage id='modal_manageUser.lastName' />
                                </label>
                                <Input name="lastName"
                                    value={valueInput.lastName}
                                    onChange={(e) => handleChangeInput(e)} />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='form-item col-6'>
                                <label>
                                    <FormattedMessage id='modal_manageUser.phone' />
                                </label>
                                <Input name="phoneNumber"
                                    value={valueInput.phoneNumber}
                                    onChange={(e) => handleChangeInput(e)} />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='form-item col-12'>
                                <label>
                                    <FormattedMessage id='modal_manageUser.address' />
                                </label>
                                <Input name="address"
                                    value={valueInput.address}
                                    onChange={(e) => handleChangeInput(e)} />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='form-item col-4'>
                                <label>
                                    <FormattedMessage id='modal_manageUser.gender' />
                                </label>
                                <select
                                    className='form-control'
                                    defaultValue={valueInput.gender}
                                    name="gender"
                                    onChange={(e) => handleChangeInput(e)}
                                >
                                    {allCode && allCode.length > 0 && allCode.filter(code => code.type === "GENDER").map((item, index) => {
                                        return (
                                            <option key={index} value={item.keyMap}>
                                                {language === LANGUAGES.VI ? item.value_VI : item.value_EN}
                                            </option>
                                        )
                                    })}
                                </select>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='form-item col-6'>
                                <label>
                                    <FormattedMessage id='modal_manageUser.postion' />
                                </label>
                                <select
                                    className='form-control'
                                    defaultValue={valueInput.positionId}
                                    name="positionId"
                                    onChange={(e) => handleChangeInput(e)}
                                >
                                    {allCode && allCode.length > 0 && allCode.filter(code => code.type === "POSITION").map((item, index) => {
                                        return (
                                            <option key={index} value={item.keyMap}>
                                                {language === LANGUAGES.VI ? item.value_VI : item.value_EN}
                                            </option>
                                        )
                                    })}
                                </select>
                            </div>
                            <div className='form-item col-6'>
                                <label>
                                    <FormattedMessage id='modal_manageUser.roleID' />
                                </label>
                                <select
                                    className='form-control'
                                    defaultValue={valueInput.roleId}
                                    name="roleId"
                                    onChange={(e) => handleChangeInput(e)}
                                >
                                    {allCode && allCode.length > 0 && allCode.filter(code => code.type === "ROLE").map((item, index) => {
                                        return (
                                            <option key={index} value={item.keyMap}>
                                                {language === LANGUAGES.VI ? item.value_VI : item.value_EN}
                                            </option>
                                        )
                                    })}
                                </select>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='form-item col-8'>
                                <label>
                                    <FormattedMessage id='modal_manageUser.image' />
                                </label>
                                <input id="uploadAvata" type='file' className='d-none' name="image" onChange={(e) => handleChangeFileUploadAvata(e)} />
                                <label htmlFor='uploadAvata' className='btn_uploadAvata '>
                                    Tải ảnh
                                    <span style={{ margin: '0px 0 0px 5px' }}><ImUpload3 /></span>
                                </label>
                                {valueInput.imageUrl &&
                                    <div>
                                        <img className='imgAvata' src={valueInput.imageUrl} alt='avata' />
                                        <button className='btn btn-danger mt-2' style={{ marginLeft: '10px' }} onClick={() => setValueInput({
                                            ...valueInput,
                                            imageUrl: '',
                                            image: ''
                                        })}>
                                            Remove
                                        </button>
                                    </div>
                                }
                            </div>
                        </div>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    {typeModal && typeModal.btnSubmit === CRUD_ACTION.UPDEAT ?
                        <Button variant="primary"
                            onClick={() => handleUpdateUser()}
                        >
                            <FormattedMessage id="modal_manageUser.update" />
                        </Button> : <Button variant="primary"
                            onClick={() => handleAddNewUser()}
                        >
                            <FormattedMessage id="modal_manageUser.save" />
                        </Button>
                    }
                    <Button variant="secondary" onClick={handleClose}>
                        <FormattedMessage id="modal_manageUser.close" />
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalUser;