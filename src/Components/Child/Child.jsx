import React, { Component } from 'react'

export default class Child extends Component {
  render() {
    let {name, price, category, id, quantity} = this.props.myProduct
    return (
      <>
     <div className="col-md-4 p-3">
        <div className="bg-info p-4">
            <h2>Product: {name}</h2>
            <h3>Price: {price}</h3>
            <h4>Category: {category}</h4>
            <h5>Quantity: {quantity}</h5>
            <button className='btn btn-success w-100 my-2' onClick={()=>this.props.update(id)}>Update Quantity</button>
            <button onClick={()=>this.props.delete(this.props.index)} className='btn btn-danger w-100'>Delete Product</button>


        </div>
     </div>
      </>
    )
  }

}