import { useState } from 'react'
import { Link } from 'react-router-dom'

function ColorList({colors}){
  console.log(colors)
  const colorNames = Object.keys(colors)
  return(
    <>
      <div>
        <h1>Welcome to the color factory!</h1>
        <p>
          <Link to="/colors/new">Add a new color</Link>
        </p>
      </div>
      <div>
        <h2>Please select a color:</h2>
        {colorNames.map((color) => <p key={color}><Link to={`/colors/${color}`}>{color}</Link></p>)}
      </div>
    </> 
  )
}
export default ColorList