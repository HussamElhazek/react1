import React, { useEffect  } from 'react'
import axios from 'axios'



export default function Home() {
 
    async function getDataFromApi() {
       let {data} = await axios.get('https://ecommerce.routemisr.com/api/v1/products')
       console.log(data.data);

    }
 
    useEffect(() => {
        getDataFromApi()
    }, [] )
    
  return (
    <>
      <div className="contanier">
        <div className="img"></div>
      </div>
    </> 
  )
}
