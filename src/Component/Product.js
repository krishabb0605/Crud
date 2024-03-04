import React from 'react'

const Product = ({ productDetail, editData, removeData }) => {
    console.log("Product component")
    return (
        <>
            <tr className='text-center'>
                <td>
                    <p className='name '>{productDetail.id}</p>
                </td>
                <td>
                    <p className='name'>{productDetail.name}</p>
                </td>
                <td>
                    <p className='name'>{productDetail.qty}</p>
                </td>
                <td>
                    {/* <button className='btn'> */}
                    <i className="fa fa-edit trashBtn name me-4 ms-3" onClick={() => editData(productDetail)}  ></i>
                    <i className="fa fa-trash trashBtn name text-danger" onClick={() => removeData(productDetail)}  ></i>
                    {/* </button> */}
                </td>

            </tr>
        </>
    )
}

export default Product
