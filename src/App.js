import React from 'react'
import Navbar from './Component/Navbar/Navbar'
import Recipes from './Component/Recipes/Recipes'
import Brands from './Component/Brands'
import Products from './Component/Products'
import Footer from './Component/Footer'
import Layout from './Component/Layout'
import Home from './Component/Home'
import About from './Component/About'
import Contant from './Component/Contant'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Parent from './Component/Parent'


export default function App() {
  let routers = createBrowserRouter([
    {path: '/', element: <Layout/> , children:[
      {index:true, element: <Products/>},
      {path: 'Products', element: <Products/>},
      {path: 'Brands', element: <Brands/>},
      {path: 'Recipes', element: <Recipes/>},
   
 
    ]}
    
   
  ])
  return (
    <>
    {/* <Navbar /> */}
    
    <RouterProvider router={routers}/>
    {/* <Products/>
    <Brands />
    <Recipes/>  */} 
    </>
  )
}
