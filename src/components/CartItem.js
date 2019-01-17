import React from 'react'
 { /* import CartItems from './CartItems' */ }

//added import CartItem from './CartItem' above?

const CartItem = (props) => {


    { /* function priceInCents(amt) {
      return '$' + amt/100 */}

  return(

    <div className="list-group-item">
      <div className="row">
        <div className="col-md-8">{(props.name)}</div>
        <div className="col-md-2">${(props.priceInCents/100).toFixed(2)}</div>
        <div className="col-md-2">1</div>
      </div>
    </div>

  )
}
export default CartItem
