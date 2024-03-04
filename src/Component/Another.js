import './App.css';
import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import Counter from './Counter';
const initialProducts = [
  {
    id: 1,
    name: 'Mobile',
    qty: 4
  },
  {
    id: 2,
    name: 'Wallet',
    qty: 10
  },
  {
    id: 3,
    name: 'Tablet',
    qty: 100
  },
]

function Another() {
  const [products, setProducts] = useState(initialProducts)
  const [newValue, setValue] = useState('')
  const inputRef = useRef();
  const buttonRef = useRef();
  const addProduct = () => {
    // console.log('click')
    const newValues = [...products]
    newValues.push({
      id: products.length,
      name: newValue,
      qty: 10
    })
    setProducts(newValues)
    setValue('')
  }
  const changeByClick = (e) => {
    // console.log('change')
    setValue(e.target.value)
  }
  useEffect(() => {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
    console.log('useEffect App');
  }, []);
  useLayoutEffect(() => {
    console.log('useLayoutEffect App');
  }, []);
  const onChangeCounter = useCallback(() => {
    console.log('Counter changed!!! "', newValue, '"');
  }, [newValue]);
  let totalQty = useMemo(() => products.reduce((qty, product) => qty + product.qty, 0), [products]);
  // let val1 = useMemo(() => {
  //   let val = 0;
  //   for (let i = 0; i < 10000; i++) {
  //     console.log(i);
  //     val++;
  //   }
  //   return val
  // }, []);
  // let val1 = 0;
  // for (let i = 0; i < 10000; i++) {
  //   console.log(i);
  //   val1++;
  // }
  console.log('Re-Rendered App', totalQty, { inputRef });
  // return <Counter />
  return (
    <>
      <Counter onChangeCounter={onChangeCounter} />
      <input ref={inputRef} value={newValue} onChange={changeByClick}></input>
      <button ref={buttonRef} onClick={addProduct}>add Product</button>
      {products.map((item, i) => (
        <h3 key={i}>{item.id}{item.name}</h3>
      ))}
    </>
  );
}
export default Another;

// import React, { useState } from "react";
// const Counter = ({ onChangeCounter }) => {
//     const [counter, setCounter] = useState(0);
//     const incrementCounter = () => {
//         setCounter((prevCount) => prevCount + 1);
//         onChangeCounter();
//     }
//     const decrementCounter = () => {
//         setCounter(counter - 1);
//         onChangeCounter();
//     }
//     console.log('Counter re-rendered');
//     return (
//         <div>
//             <h1>Counter: {counter}</h1>
//             <button onClick={incrementCounter}>Increment</button>
//             <button onClick={decrementCounter}>Decrement</button>
//         </div>
//     )
// }
// export default React.memo(Counter);