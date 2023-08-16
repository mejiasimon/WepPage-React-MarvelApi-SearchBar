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
       <ul className="menu-bar">
        <li><a href="https://www.marvel.com"><img className="logo2" src="../public/img/pngwing.com.png" alt="" /></a></li>
               <li><Link className="nav-link" to="/">Home</Link></li>
               <li><Link className="nav-link" to="/">Comics</Link></li>
               <li><Link className="nav-link" to="/:id">Characters</Link></li>
    </ul>
        </div>
        </>
    )
}