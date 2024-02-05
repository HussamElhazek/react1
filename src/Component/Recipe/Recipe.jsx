import React from 'react'

export default function Recipe({recipe}) {
  return (
    <>
      <div className="col-md-4">
            <img src={recipe.image_url} className='w-100'height="200" alt="" />
          </div>
    </>
  )
}
