import '../COMICS/COMICS.css'

import { useState } from 'react'
import { SEARCHBAR2 } from '../SEARCHBAR2/SEEARCHBAR2'
import { Link } from 'react-router-dom'
export function COMICS (){
    const[comics,setcomics]=useState([])
    const IMAGE_SIZE="portrait_fantastic"
    return(
        <>
          <SEARCHBAR2 setter={setcomics}></SEARCHBAR2>
          <div className="container-comics">
          <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
{
comics.map(function(comic){
return(
<>
<div className="card">
              <img className="img"src={`${comic.thumbnail.path}/${IMAGE_SIZE}.${comic.thumbnail.extension}`} alt="" />
                  <span>About</span>
                  <Link to={`/comics/${comic.id}`}>
                  <button>more</button>
                  </Link>
                </div>

</>
)
})


}
          </div>
        </>
    )
}