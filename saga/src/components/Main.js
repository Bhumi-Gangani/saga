import { useDispatch } from 'react-redux';

import { addToCart, removeFromCart, emptyCart } from '../redux/action';
import { productList } from '../redux/productAction';
import { useSelector } from 'react-redux'
import { useEffect } from 'react';


function Main() {
  const data = useSelector((state) => state.productData)
  // console.warn("resultinggggg in mainnnn",data)
  console.warn("resultinggggg in mainnnn from saga", data)


  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(productList());
  },[dispatch])

  return (
    <>
      <div className="container">
        <div className="main">
          <button onClick={() => { dispatch(emptyCart()) }}>Empty cart</button>
          {/* <button onClick={() => { dispatch(productList()) }}>Product list</button> */}
        </div>
        <div className="product_container">
          {
            data.map((item) => {
              return (
                <div className="product_item" key={item.id}>
                  <img src={item.img} alt="item" />
                  <div>Name : {item.name}</div>
                  <div>Color : {item.color}</div>
                  <div>Price : {item.price}</div>
                  <div className="product_buttons">
                    <button onClick={() => { dispatch(addToCart(item)) }}>Add to cart</button>
                    <button onClick={() => { dispatch(removeFromCart(item.id)) }}>Remove from cart</button>
                    {/* item.id passed as prevdata in reducer  */}
                  </div>
                </div>                
              )
            })
          }
        </div>
      </div>
    </>
  );
}

export default Main;
