import { useEffect } from "react";
import { useState } from "react";



export default function Gallary(){

    let[quantity,setQuantity] = useState(0)

    function updateQuantity (){
        setQuantity(quantity+1)
    }

    useEffect(()=>{
        
        if(quantity == 0){
            return
        }
        console.log("Hello from did updated");
    },[quantity])

    // useEffect(()=>{
    //     let timer = setInterval(()=>{
    //     console.log("Timer");
    //     },1500)
        
    //   return ()=>{
    //     clearInterval(timer)
    //     console.log("Hello From will UnMount");
    //   }
    // },[])


    return(
        <>
        <h1>Hello From Gallary</h1>
        <h2>Quantity: <span className="text-danger">{quantity}</span></h2>
        <button className="btn btn-outline-danger" onClick={()=>updateQuantity()}>Update Quantity</button>
        </>
    )
}