import React, { useState, useEffect } from 'react';
import { createNewUserService, deleteUserService, handleGetUserService } from '../../../../services/userService';
import ModalUser from './ModalUser';
import TableBasic from '../../../../components/Table/TableBasic';
import { FormattedMessage } from 'react-intl';
import Swal from 'sweetalert2';

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

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

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
                handleShow={handleShow}
                createNewUser={createNewUser}
            />
            <TableBasic headerList={headerList} data={arrUser} deleteRow={deleteUser} />
        </React.Fragment>
    );
}

export default UserManage;
