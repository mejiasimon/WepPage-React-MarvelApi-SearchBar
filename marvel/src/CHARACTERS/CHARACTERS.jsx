import '../CHARACTERS/CHARACTERS.css'
import '../CHARACTERS/CARD.css'
import { SEARCHBAR } from '../SEARCHBAR/SEARCHBAR'
import { useState} from 'react'
const IMAGE_SIZE="portrait_fantastic"
export function CHARACTERS (){
    const[characters,setcharacters]=useState([])
    if(characters){
        return(
            <>
                  <SEARCHBAR setter={setcharacters}/>
                  <div className="container-characters">
    {
       
            characters.map(function(character){
                    return (
                        <>
                        <div className="card">
              <img className="img"src={`${character.thumbnail.path}/${IMAGE_SIZE}.${character.thumbnail.extension}`} alt="" />
                  <span>About</span>
                  <p className="info">{character.name}</p>
                  <p className="info">{character.results}</p>
                  <button>more</button>
                </div>
                
                        </>
                    )
                })
            
    }
                  </div>
            </>
         )
    }
}