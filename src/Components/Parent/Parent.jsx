import React, { Component } from 'react'
import Child from '../Child/Child'

export default class Parent extends Component {
    state = {
        products:[
        {
            id:0,
            name:"Iphone",
            price:20000,
            category:"Mobile",
            onSale: false,
            quantity:5000
        },
        {
            id:1,
            name:"Samsung",
            price:10000,
            category:"Phone",
            onSale: true,
            quantity:3000
        },
        {
            id:2,
            name:"Pixel",
            price:18000,
            category:"Google",
            onSale: true,
            quantity:500
        },
        {
            id:3,
            name:"HTC",
            price:8000,
            category:"Mobile",
            onSale: false,
            quantity:1000
        },
        {
            id:4,
            name:"Huawei",
            price:9000,
            category:"Mobile",
            onSale: true,
            quantity:2000
        }
    ]
    }

    deleteProduct = (index)=>{
      // Deep Copy
      let products = [...this.state.products]

      // Change
      products.splice(index,1)

      // Action
      this.setState({products})

      //  // Deep Copy
      //  let products = [...this.state.products]


      //  // Change
      //  products = products.filter((product)=> product.id != id)

      //  // Action
      //   this.setState({products})
    }

    updateProduct = (index)=>{

      // Deep Copy
      let products = [...this.state.products]

      // Change
      products[index].quantity +=1

      // Set State
      this.setState({products})

      // Deep Copy
      // let products = [...this.state.products]

      // // Change
      // products = products.map((product)=>{
      //   if(product.id == id){
      //     product.quantity +=1
      //   }
      //   return product
      // })

      // // Set State
      // this.setState(products)




      // // Deep Copy
      // let products = [...this.state.products]


      // // Change
      // let currentIndex = products.indexOf(product)
      // products[currentIndex].quantity+=10


      // // Action
      // this.setState({products})

    }

  render() {   
    return (
      <>
      <div className="container bg-dark my-2">
        <div className="row">
            {this.state.products.map((product,index)=> <Child key={product.id} myProduct={product} index={index} delete={this.deleteProduct} update={this.updateProduct} />)}
        </div>
      </div>
      </>
    )
  }
}