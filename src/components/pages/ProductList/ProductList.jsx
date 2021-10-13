import React, { useState, useEffect } from 'react';
import './ProductList.css';
import { productRows } from '../Home/dummyData';
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from '@material-ui/icons';
import { IconButton } from '@material-ui/core';
import { Link } from 'react-router-dom';

const ProductList = () => {
    const [data, setData] = useState([]);

    useEffect(()=>{
        setData(productRows)
    }, []);

    const handleDelete = (id) => {
        const itemDelete = data.filter((item) => item.id !== id);
        setData(itemDelete);
    };

    const columns = [
        { field: "id", headerName: "ID", width: 130 },
        { field: "product", headerName: "Product", width: 200, renderCell: (params) => {
            return (
                <div className="productListItem">
                    <img className="productListImg" src={params.row.img} alt="" />
                    {params.row.name}
                </div>
            )
        } },
        { field: "stock", headerName: "Stock", width: 200 },
        { field: "status", headerName: "Status", width: 130 },
        { field: "price", headerName: "Price", width: 190 },
        { field: "action", headerName: "Action", width: 150, renderCell: (params)=>{
            return (
                <>
                    <Link to={"/product/" + params.row.id}>
                        <button className="productListEdit">Edit</button>
                    </Link>
                    <IconButton onClick={() => handleDelete(params.row.id)} >
                        <DeleteOutline className="productListDelete" />
                    </IconButton>
                </>
            )
        } },
    ]
    
    return (
        <div className="productList">
            <DataGrid rows={data} disableSelectionOnClick columns={columns} pageSize={8} rowsPerPageOptions={[]} checkboxSelection />
        </div>
    )
}

export default ProductList
