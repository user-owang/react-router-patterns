import { useState, useEffect } from 'react'
import { Link, useParams, Navigate } from 'react-router-dom'
import "./ColorDetails.css"

function ColorDetails({colors}){
  const {name} = useParams()
  if (!Object.keys(colors).includes(name)){
    return(<Navigate to="/colors" />)
  }

  useEffect(() => {
    document.documentElement.style.backgroundColor = colors[name]
    return () => {
      document.documentElement.style.backgroundColor = ''
    }
  }, [colors])

  return(
    <>
      <p>This is {name}</p>
      <p>Isn't this grand?</p>
      <p><Link to="/colors">Go back</Link></p>
    </> 
  )
}
export default ColorDetails