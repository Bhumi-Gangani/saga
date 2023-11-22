import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Cart = () => {
    const cartData = useSelector((state) => state.cartData);
    let amount = cartData.length && cartData.map((item)=>item.price).reduce((prev,next)=>prev+next)
    return (
        <>
            <div className="container">
                <div className="cart_page_container">
                    <Link to="/">
                        <h3>Go to Product list</h3>
                    </Link>
                    <h1>ADDED ITEMS</h1>
                    <div className="items_container">
                        <table>
                            <tr>
                                <td>Name</td>
                                <td>Color</td>
                                <td>Price</td>
                            </tr>
                            {cartData.map((item) => {
                                return (
                                    <tr key={item.id}>
                                        <td>{item.name}</td>
                                        <td>{item.color}</td>
                                        <td>{item.price}</td>
                                    </tr>
                                )
                            })}

                        </table>
                    </div>
                    <div className="pricelist">
                        <div className="amount"><span>Amount : </span><span>{amount}</span></div>
                        <div className="amount"><span>Discount : </span><span>{amount/10}</span></div>
                        <div className="amount"><span>Total : </span><span>{amount-(amount/10)}</span></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart
