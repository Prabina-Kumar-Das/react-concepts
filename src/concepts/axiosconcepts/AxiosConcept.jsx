import axios from 'axios'
import React, { useEffect, useState } from 'react'

const AxiosConcept = () => {

  const [products, setProducts] = useState([])


  const FData = async () => {
    const {data} = await axios.get("https://fakestoreapi.com/products")
    setProducts(data)


  }
  useEffect(()=> {
    FData();
  }, [])

  console.log(products);
  
  return (
    <div>
      {
        products.length === 0 ? <h1>Loading.....</h1> : products.map((ele, index)=>{
          return <h3 key={index}>{ele.title}</h3>
        })
      }
    </div>
  )
}

export default AxiosConcept