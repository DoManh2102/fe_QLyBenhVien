import React, { useState, useEffect } from 'react';
import { createNewUserService, deleteUserService, eidtUserService, handleGetUserService } from '../../../../services/userService';
import ModalUser from './ModalUser';
import TableBasic from '../../../../components/Table/TableBasic';
import { FormattedMessage } from 'react-intl';
import Swal from 'sweetalert2';
import { CRUD_ACTION } from '../../../../utils/constant';

const headerList = [
    { fields: 'email', width: '20%' },
    { fields: 'firstName', width: '10%' },
    { fields: 'lastName', width: '10%' },
    { fields: 'phoneNumber', },
    { fields: 'address', },
    { fields: '', btnEdit: true, btnDelete: true, width: '140px' },
]

function UserManage(props) {
    const [arrUser, setArrUser] = useState([])
    const [showModal, setShowModal] = useState(false);

    const [typeModal, setTypeModal] = useState({
        btnSubmit: '',
        userEdit: {}
    })

    const handleClose = () => setShowModal(false);

    useEffect(() => {
        getAllUser()
    }, []);

    const getAllUser = async () => {
        const response = await handleGetUserService()
        setArrUser(response.user)
    }

    const createNewUser = async (data) => {
        try {
            const response = await createNewUserService(data)
            if (response && response.errCode === 0) {
                Swal.fire('Thêm thành công')
                getAllUser();
            } else {
                alert(response.errMessage)
            }
        } catch (error) {
            console.log(error);
        }
    }



    const showModalUser = (data, typeButton) => {
        let imgBase64 = '';
        if (data.image) {
            imgBase64 = new Buffer(data.image, 'base64').toString('binary')
        }
        setShowModal(true)
        if (typeButton === CRUD_ACTION.UPDEAT) {
            setTypeModal({
                btnSubmit: typeButton,
                userEdit: {
                    ...data,
                    gender: 'M',
                    roleId: 'R2',
                    positionId: 'P0',
                    imageUrl: imgBase64
                }
            })
        }
        else if (typeButton === CRUD_ACTION.CREATE) {
            setTypeModal({
                btnSubmit: typeButton,
                userEdit: {
                    gender: 'M',
                    roleId: 'R2',
                    positionId: 'P0',
                }
            })
        }
    }

    const handleEditUser = async (data) => {
        console.log(data);
        try {
            const response = await eidtUserService(data)
            if (response && response.errCode === 0) {
                Swal.fire('Cập nhật thành công')
                getAllUser()
            } else {
                alert(response.errMessage)
            }
        } catch (error) {
            console.log(error);
        }
    }

    const deleteUser = async (user) => {
        if (window.confirm("You may want to delete?")) {
            try {
                const response = await deleteUserService(user.id)
                if (response && response.errCode === 0) {
                    getAllUser()
                }
            }
            catch (error) {
                alert(error);
            }
        }
    }

    return (
        <React.Fragment>
            <h2 >
                <FormattedMessage id="menu.admin.manage-user" />
            </h2>
            <ModalUser
                showModal={showModal}
                handleClose={handleClose}
                createNewUser={createNewUser}
                typeModal={typeModal}
                updateUser={handleEditUser}
                showModalUser={showModalUser}
            />
            <TableBasic headerList={headerList} data={arrUser} deleteRow={deleteUser} showModalUser={showModalUser} />
        </React.Fragment>
    );
}

export default UserManage;
