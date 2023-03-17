import React from 'react';
import Table from 'react-bootstrap/Table';
import { BiDetail } from 'react-icons/bi';
import { CRUD_ACTION } from '../../utils/constant';

function TableBasic({ headerList, data, deleteRow, showModalUser, cartItem }) {

    return (
        <Table bordered hover style={{ color: '#fff' }}>
            <thead>
                <tr>
                    {headerList && headerList.length > 0 && headerList.map((title, index) =>
                        <th key={index} style={{ textAlign: 'center' }}>{title.fields.toUpperCase()}</th>
                    )}
                </tr>
            </thead>
            <tbody>
                {data && data.length > 0 && data.map((row, index) => (
                    <tr key={index} >
                        {
                            headerList.map((column, index) => {
                                // lấy ra colum có fields đuôi _img
                                const columImg = column.fields.indexOf('_img')
                                if (columImg === -1) {  // ko có đuôi _img
                                    const tdData = row[column.fields]; // lấy ra dữ liệu
                                    return (
                                        <td key={index} style={{ width: `${column.width}` }
                                        }>
                                            {column.fields === 'price' || column.fields === 'total' ? new Intl.NumberFormat().format(tdData) + ' vnđ' : tdData}
                                            {column.btnEdit && showModalUser && <button onClick={() =>
                                                showModalUser(row, CRUD_ACTION.UPDEAT)
                                            } className='btn btn-success me-2 px-3'>Edit</button>}
                                            {column.btnDelete ? <button onClick={() => deleteRow(row)} className='btn btn-danger ml-2 px-2'>Delete</button> : ''}
                                            {column.btnDetail ? <BiDetail style={{ fontSize: '30px' }} onClick={() => {
                                                return (
                                                    showModalUser(true),
                                                    cartItem(row.productCart)
                                                )
                                            }} /> : ''}
                                        </td>
                                    )
                                } else {
                                    return (
                                        <td key={index} style={{ width: `${column.width}` }
                                        }>
                                            <img style={{ display: 'block', width: '150px', margin: '0 auto' }} src={row[column.fields]} alt='a' />
                                        </td>
                                    )
                                }
                            })
                        }
                    </tr>
                ))}
            </tbody>

        </Table >
    );
}

export default TableBasic;