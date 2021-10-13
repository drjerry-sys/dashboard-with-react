import React, { useState, useEffect } from 'react';
import './UserList.css';
import { userRows } from '../Home/dummyData';
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from '@material-ui/icons';
import { IconButton } from '@material-ui/core';
import { Link } from 'react-router-dom';

const UserList = () => {
    
    const [users, setUsers] = useState([]);

    useEffect(()=>{
        setUsers(userRows)
    },[])

    const handleDelete = (id) => {
        const itemDelete = users.filter((item) => item.id !== id);
        setUsers(itemDelete);
    }

    const columns = [
        { field: "id", headerName: "ID", width: 130 },
        { field: "username", headerName: "Username", width: 200, renderCell: (params) => {
            return (
                <div className="userListUser">
                    <img className="userListImg" src={params.row.avatar} alt="" />
                    {params.row.username}
                </div>
            )
        } },
        { field: "email", headerName: "Email", width: 200 },
        { field: "status", headerName: "Status", width: 130 },
        { field: "transaction", headerName: "Transaction Volume", width: 190 },
        { field: "action", headerName: "Action", width: 150, renderCell: (params)=>{
            return (
                <>
                    <Link to={"/user/" + params.row.id}>
                        <button className="userListEdit">Edit</button>
                    </Link>
                    <IconButton onClick={() => handleDelete(params.row.id)} >
                        <DeleteOutline className="userListDelete" />
                    </IconButton>
                </>
            )
        } },
    ]

    return (
        <div className="userList">
            <DataGrid rows={users} ac disableSelectionOnClick columns={columns} pageSize={8} rowsPerPageOptions={[]} checkboxSelection />
        </div>
    )
}

export default UserList;