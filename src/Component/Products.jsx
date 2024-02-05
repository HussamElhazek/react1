import axios from 'axios'
import React, { useEffect , useState } from 'react'
import Product from './Product'
import Navbar from './Navbar/Navbar'


export default function Products() {


const [products , setProducts] = useState([])

   async function getProducts() {
    let {data} = await axios.get('https://ecommerce.routemisr.com/api/v1/products')

    setProducts(data.data)

   }
  

    useEffect(()=>{
        getProducts()
    }, [])
  return (
    
    <>
    {/* <Navbar />  */}
      <div className="contanier">
        <div className="row">
           {products.map((item)=> <Product product={item} />)}
        </div>
      </div>
    </>
  )
}
