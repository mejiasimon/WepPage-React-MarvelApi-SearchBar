import { useRef } from 'react'
import '../SEARCHBAR/SEARCHBAR.css'
import { fetchHeroes } from '../services/fetchHeroes';
export function SEARCHBAR({setter}){
    let input=useRef("");
    const handleclick=async(e)=>{
        e.preventDefault();
        let value=input.current.value;
        if(value === "") return;
        try{
            let heroes=await fetchHeroes(value)
            setter(heroes)
        }catch(err){
            return console.err(err);
        }
    }
    return(
<>
<div className="container_bar">
<form>
    <div className="container-form"><input className='searchbar' type="text"  placeholder="Search Hero" ref={input}/>
<button onClick={handleclick} className='Button'><div className="material-symbols-outlined">search</div></button></div>
</form>
</div>
</>
    );
}