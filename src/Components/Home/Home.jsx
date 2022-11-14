import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ReactLoading from "react-loading"
import img1 from '../../images/notfound.png'
export default function Home() {

    let [data,setData] = useState([])
    const [isLoading,setIsLoading] = useState(true)
    const [error,setError] = useState(null)

    async function getData(){
        return await axios.get('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=177bce2ed27442aba517b1d76ffa6ad8')
    }

    useEffect(()=>{
        // setTimeout(()=>{
                getData().then((res) =>{
                    setData(res.data.articles)
                    setIsLoading(false)
                    setError(null)
                })
                .catch((err) =>{
                    console.log(err);
                    setIsLoading(false)
                    setError(err)
                })
        // },800)
    },[])


    // console.log("fares",{data});

  return (
    <>
    <div className="container">
        <div className="row mt-3">
            {isLoading && <div className='d-flex justify-content-center align-items-center'><ReactLoading type={"bars"} color={"teal"} height={100} width={150} /></div>}
            {error && <div className='bg-danger text-white'>{error.message}</div>}

            {data?.map((mydata)=>(
                <div className="col-md-4">
                    <div className="item">
                        <img className='img-fluid' src={mydata.urlToImage ? mydata.urlToImage:img1} alt="" />
                        <h3>{mydata.title}</h3>
                        <p>{mydata.description}</p>
                    </div>
                </div>
))}

        </div>
    </div>
    </>
  )
}
