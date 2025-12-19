import { useState } from 'react'
import './App.css'
import Button from './components/Button'
import ColorBox from './components/ColorBox'

function App() {
  const colors = ['pink', 'blue', 'red', 'lightseagreen', 'tomato', 'lightcoral']

  const [selectedColor, setSelectedColor] = useState('transparent')

  return (
    <>
      <h1>Colour Switcher</h1>
      <div className='buttons'>
         {
        colors.map((item)=>{
          return(
            <Button key={item} color={item} setSelectedColor={setSelectedColor}>
            {item}
          </Button>
          )
        })
      }
      </div>
      
    <div className='colorbox'> 
      <ColorBox color={selectedColor}/>
    </div>
      
    </>
  )
}

export default App
