import React, { useEffect, useState } from 'react'

import {BsFillMoonStarsFill} from 'react-icons/bs'
import {ImSun} from 'react-icons/im'
import { useContext } from 'react'
import { ThemeContext } from '../contex/ThemeProvider'

function ColorTheme() {
    const {mode , changeMode:setNewMode} = useContext(ThemeContext)
    const [ theme , setTheme] = useState(mode)

    const changeMode = ()=>{
        const newTheme = theme == "light" ? "dark" : "light"
        setTheme(newTheme)
    }

    useEffect(() =>{
        setNewMode(theme)
    },[theme])
  return (
    <div className='align-element mb-4' onClick={changeMode}>
    {theme == "light" ? (<ImSun className='text-3xl'/>) :(
    <BsFillMoonStarsFill className='text-3xl'/>)}
    </div>
  )
}

export default ColorTheme