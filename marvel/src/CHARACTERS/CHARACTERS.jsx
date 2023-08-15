import '../CHARACTERS/CHARACTERS.css'
import { SEARCHBAR } from '../SEARCHBAR/SEARCHBAR'
import { useState } from 'react'
export function CHARACTERS (){
    const[characters,setcharacters]=useState([])
    return (
        <>
        <SEARCHBAR setter={setcharacters}/>
        
<h1></h1>
        </>

    )
}