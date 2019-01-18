import React from 'react'
import CartItem from './CartItem'

// {/* {(props.cartItemsList) => (
//   priceInCents
// )
//
// list.reduce((sum, i) =>
//   sum += i.count * i.priceInCents ), 0)
// } */}

const itemsTotal = (list) => {
  let total = list.reduce((sum, i) =>{
    sum += (i.product.priceInCents * i.quantity)/100
    return sum
  },0).toFixed(2)
  return `$${total}`
}

const CartItems = (props) => {
  return (
    <div className="container">
      <h1>Cart Items</h1>
      <div className="list-group">
        <div className="list-group-item">
          <div className="row">
            <div className="col-md-8">Product</div>
            <div className="col-md-2">Price</div>
            <div className="col-md-2">Quantity</div>
          </div>
        </div>
        { props.cartItemsList.map(item => <CartItem
          key={item.id}
          name={item.product.name}
          priceInCents={item.product.priceInCents}
          quantity={item.quantity}
        />)}
      </div>
      <p>Total: {itemsTotal(props.cartItemsList)}</p>
    </div>

)}

export default CartItems
