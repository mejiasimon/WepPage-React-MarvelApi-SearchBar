import { Route,Routes } from "react-router-dom"
import { HOME } from "../HOME/HOME"
import { NAV } from "../NAV/NAV"
import { FOOTER } from "../FOOTER/FOOTER"
import { CHARACTERS } from "../CHARACTERS/CHARACTERS"
export function Rutas(){
    return(
   <>
   <NAV/>
   <Routes>
<Route path="/" element={<HOME />} />
<Route path="/character" element={<CHARACTERS/>} />
</Routes>
<FOOTER/>
   </>
    )
}