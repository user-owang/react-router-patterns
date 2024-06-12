import { useState, } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import ColorList from './ColorList'
import ColorDetails from './ColorDetails'
import NewColorForm from './NewColorForm'

function App() {
  const [colors, setColors] = useState({
    red: '#ff0000',
    green: '#00ff00',
    blue: '#0000ff'
  })

  const addColor = (name,hex) =>{
    colors[name] = hex
    setColors({...colors})
  }

  return (
    <>
      <Routes>
        <Route path='/' element={<Navigate to="/colors" />} />
        <Route path="/colors" element={<ColorList colors={colors} />} />
        <Route path="/colors/:name" element={<ColorDetails colors={colors}/>} />
        <Route path="/colors/new" element={<NewColorForm addColor={addColor} colors={colors} />} />
        <Route path="/*" element={<Navigate to="/colors" />} />
      </Routes>
    </>
  )
}

export default App
