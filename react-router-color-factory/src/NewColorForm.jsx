import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'


function NewColorForm({addColor, colors}){
  const [colorName, setColorName] = useState('')
  const [hex, setHex] = useState('#000000')
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault()
    if (Object.keys(colors).includes(colorName)){
      return alert("That color name already exists! Please try again!")
    }
    addColor(colorName,hex)
    navigate('/colors')
  }

  return(
    <>
      <h1>Add a new color!</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Color Name:</label>
          <input
            type="text"
            id="colorName"
            value={colorName}
            onChange={(e) => setColorName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Color:</label>
          <input
            type="color"
            id="hex"
            value={hex}
            onChange={(e) => setHex(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add Color</button>
      </form>
      <Link to="/colors">Cancel</Link>
    </> 
  )
}
export default NewColorForm