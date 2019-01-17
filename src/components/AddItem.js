import React, { Component } from 'react'


class AddItem extends Component {
  state = {
    // Added product block below from the App component
    products: [
      { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 },
      { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 },
      { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 },
      { id: 43, name: 'Small Aluminum Keyboard', priceInCents: 2500 },
      { id: 44, name: 'Practical Copper Plate', priceInCents: 1000 },
      { id: 45, name: 'Awesome Bronze Pants', priceInCents: 399 },
      { id: 46, name: 'Intelligent Leather Clock', priceInCents: 2999 },
      { id: 47, name: 'Ergonomic Bronze Lamp', priceInCents: 40000 },
      { id: 48, name: 'Awesome Leather Shoes', priceInCents: 3990 },
    ],
// Added product block above from the App component
    quantity: 0,
    productId: 40
  }

  onSubmit = (e)=> {
    e.preventDefault()
    this.props.addItemToState(this.state.quantity,
    this.state.productId)

  }
  render() {
    return (


      <form className="container" onSubmit={this.onSubmit}>
        <div className="form-group">
          <label htmlFor="quantity">Quantity</label>
          <input type="number" className="form-control" id="quantity" value={this.state.quantity}
          onChange={(e)=> this.setState({quantity: e.target.value})}/>

          <label htmlFor="product">Product</label>
          <select id="product" className="form-control"
           onChange={(e) => this.setState({productId: this.state.products.find(product => product.name === e.target.value)['id']})}>
            <option>Choose...</option>
            {this.props.products.map(product => <option key={product.id}>{product.name}</option>)}
          </select>

          <button type="submit" className="btn btn-primary">Submit</button>


        </div>
      </form>
    )
  }
}

export default AddItem
