import { Link } from "react-router-dom"
import '../NAV/NAV.css'
import WOW from 'wow.js'
import 'animate.css'
export function NAV(){
    const wow=new WOW(function(){
        wow.init()
            },[])
    return(
        <>
        <div className="container-menu">
       <ul class="menu-bar">
               <li><Link className="nav-link" to="/">Home</Link></li>
               <li><Link className="nav-link" to="/">Comics</Link></li>
               <li><Link className="nav-link" to="/:id">Characters</Link></li>
    </ul>
        </div>
        </>
    )
}