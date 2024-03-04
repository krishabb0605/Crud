// App.js

import React, { useCallback, useEffect, useRef, useState } from 'react';
import './App.css';
import Product from './Component/Product';
import New from './Component/New';

let products = [
  {
    id: 1,
    name: 'Mobile',
    qty: 5
  },
  {
    id: 2,
    name: 'Tablet',
    qty: 12
  },
  {
    id: 3,
    name: 'Laptop',
    qty: 8
  }
];

function App() {
  const [value, setValue] = useState('');
  const [qty, setQty] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [newProduct, setNewProduct] = useState(products);
  const [newId, setNewId] = useState(newProduct.length);
  const [editingProduct, setEditingProduct] = useState(null);
  const inputRef = useRef(null);
  const addRef = useRef(null)
  const removeRef = useRef(null)

  useEffect(() => {
    inputRef.current.focus();
  }, [value]);

  const add = (e) => {
    e.preventDefault();
    console.log('Add item');
    setNewProduct([...newProduct, { id: newId + 1, name: value, qty: parseInt(qty) }]);
    setNewId(newId + 1);
    setValue('');
    setQty('');
    addRef.current.textContent = "Data added"
    setTimeout(() => {
      addRef.current.textContent = ''
    }, 500);
  };

  const editData = useCallback((productDetail) => {
    setIsEditing(true);
    setValue(productDetail.name);
    setQty(productDetail.qty);
    setEditingProduct(productDetail);
  }, []);

  const save = (e) => {
    e.preventDefault();
    const updatedProducts = newProduct.map((product) => {
      if (product.id === editingProduct.id) {
        return { ...product, name: value, qty: parseInt(qty) };
      }
      return product;
    });
    setNewProduct(updatedProducts);
    setIsEditing(false);
    setValue('');
    setQty('');
    setEditingProduct(null);
  };

  const removeAllData = () => {
    let text = window.confirm('Sure you want remove all data ??');
    if (text) {
      setNewProduct([])
    }
  }

  const removeData = useCallback((productdata) => {
    console.log('Remove data');
    let text = window.confirm("Sure you want to delete " + productdata.name + " data !!");
    if (text) {
      const updatedProducts = newProduct.filter((data) => data.id !== productdata.id);
      setNewProduct(updatedProducts);
      removeRef.current.textContent = "Data removed"
      setTimeout(() => {
        removeRef.current.textContent = ''
      }, 500);
    }
  }, [newProduct])

  let totalQty = newProduct.reduce((total, current) => total + current.qty, 0)

  return (
    <div>
      <br />
      <h1 className='mx-3'>Product List !!</h1>
      <br />
      <New />
      <br />
      <br />
      <div className='container'>
        <br />
        <form onSubmit={isEditing ? save : add}>
          <input ref={inputRef} type='text' value={value} className='form-control text mb-3' placeholder="Enter product name" onChange={(e) => setValue(e.target.value)} required />
          <input type='number' value={qty} className='form-control text' placeholder='Enter quantity' onChange={(e) => setQty(e.target.value)} required />
          {isEditing ? <button type='submit' className='btn btn-primary w-100 my-3'>Save Item</button> :
            <button type='submit' className='btn btn-primary w-100 my-3' >Add Item</button>}
          <marquee ref={addRef} className='msgDisplay'></marquee>
          <marquee ref={removeRef} className='msgDisplay'></marquee>
        </form>

        <br />
        <br />
        <table className='table table-striped table-hover'>
          <thead >
            <tr className='text-center'>
              <th className='-3'>ID</th>
              <th className='px-3'>Name</th>
              <th className='px-3'>Quantity</th>
              <th className='position-relative'>Action<i className="fa fa-trash text-danger trashBtn btnAllData name ms-2" onClick={removeAllData}></i>
                <i className="textHover">Remove all data</i>
              </th>
            </tr>
          </thead>
          <tbody>
            {newProduct.map((productDetail, id) => (
              <Product key={id} productDetail={productDetail} editData={editData} removeData={removeData} />
            ))}
          </tbody>
          <tfoot>
            <tr className='text-center'>
              <td></td>
              <td></td>
              <td>Total quantity : {totalQty}</td>
              <td></td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}

export default App;

