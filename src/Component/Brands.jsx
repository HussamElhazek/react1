import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Brand from './Brand'
import Navbar from './Navbar/Navbar'


export default function Brands() {
 let [brands,setBrands]  = useState([])

 async function getBrnads() {
   let{data} = await axios.get('https://ecommerce.routemisr.com/api/v1/brands')
   console.log(data.data);
   setBrands(data.data)
    
}
 useEffect(() => {
    getBrnads()

 }, [])

  return (
    <>
    {/* <Navbar /> */}
      <div className="contanier">
        <div className="row">
          {brands.map((item) => <Brand key={item._id} brand={item} />)}
        </div>
      </div>
    </>
  )
}
