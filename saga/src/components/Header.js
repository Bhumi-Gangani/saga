import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { searchproduct } from '../redux/productAction'

const Header = () => {
  const result = useSelector((state) => state.cartData)
  console.warn("resultinggggg", result) 
  const dispatch=useDispatch();
  return (
    <>
      <div className="container antiquewhite">
        <div className="header">
          <Link to="/">
            <h1>ECOM</h1>
          </Link>
          <div className="search">
            <input type="text" name="search" id="search" placeholder='Search here...' onChange={(e)=>{dispatch(searchproduct(e.target.value))}}/>
          </div>
          <Link to="/cart">
            <div className="cart">
              <span>{result.length}</span>
              <img src="https://cdn-icons-png.flaticon.com/512/3523/3523865.png" alt="cart" />
            </div>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Header