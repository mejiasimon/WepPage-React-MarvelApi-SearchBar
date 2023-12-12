
import '../SEARCHBAR/SEARCHBAR.css'
import { useRef } from 'react';
import { fetchComics } from '../services/fetchComics.js';
export function SEARCHBAR2({setter}){
let input=useRef("")
const handleclick=async(e)=>{
e.preventDefault()
let value=input.current.value
if (value==="") return;
try {
    let comics=await fetchComics(value)
    setter(comics)
} catch (error) {
    return console.error(error)
}
}
    return(
        <>
        <div className="container_bar">
        <form>
            <div className="container-form"><input className='searchbar' type="text"  placeholder="Search Comic" ref={input}/>
        <button onClick={handleclick} className='Button'><div className="material-symbols-outlined">search</div></button></div>
        </form>
        </div>
        </>
            );
}