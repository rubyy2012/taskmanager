import React from 'react'
import styles from './styles.module.scss';
import { useState } from 'react';
const ColorItem = ({color,width,height}) => {
    const [selectedColor,setColor] = useState('')
    const handleSelectColor = (color) => {
        setColor(color)
    }
  return (
    <button 
        type='button'
        onClick={()=>handleSelectColor(color)}
        style = {{
          backgroundColor:color, 
          width : width, 
          height : height
        }}
        className={styles.label_color}></button>
  )
}
export default ColorItem;