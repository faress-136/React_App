import React, { Component } from 'react'

export default class Contact extends Component {
    state={
        quantity:0
    }

    updateQuantity = () =>{
        let quantity = this.state.quantity
        quantity +=1
        this.setState({quantity})
    }

  render() {
    return (
      <div>
        <h1>Hello From Contact</h1>
        <h2>Quantity: <span className='text-primary'>{this.state.quantity}</span></h2>
        <button className='btn btn-outline-primary' onClick={()=>{this.updateQuantity()}}>Update Quantity</button>
      </div>

      
    )
  }
}
