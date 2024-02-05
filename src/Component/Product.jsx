import React from 'react'

export default function Product({product}) {
  console.log(product);
  return (
    <>
      <div className="col-md-3 my-2">
       <img src={product.imageCover} className='w-100' alt="" />
            </div>
    </ >
  )
}
