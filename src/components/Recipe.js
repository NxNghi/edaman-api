
import React from 'react'

function Recipe(key, title, image, ingredients, calories) {
  return (
    <div key={key}>
      <h2>{title}</h2>
      <image src={image} className='' alt='img-product'/>
      <h4>{calories}</h4>
      <ol>
        {ingredients.map(item => (
          <li>{item}</li>
        ))}
      </ol>
    </div>
  )
}

export default Recipe;