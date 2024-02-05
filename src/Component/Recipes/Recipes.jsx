import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Recipe from '../Recipe/Recipe'
import Navbar from '../Navbar/Navbar'
 

export default function Recipes() {
  let [recipes , setRecipes] = useState([])
 async function getRecipes() {
    let {data} = await axios.get('https://forkify-api.herokuapp.com/api/search?q=pizza')
    console.log(data.recipes);
    setRecipes(data.recipes)
  }
  useEffect(() => {
    getRecipes()

  }, [])

  return (
    <>
    {/* <Navbar /> */}
      <div className="contanier">
        <div className="row">
          {recipes.map((item) => <Recipe key={item.recipe_id} recipe={item} /> )}
          
        </div>
      </div>
    </>
  )
}
