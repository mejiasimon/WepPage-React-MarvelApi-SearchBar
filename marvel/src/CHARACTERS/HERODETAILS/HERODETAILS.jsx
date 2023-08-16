import '../HERODETAILS/HERODETAILS.css'
import { useParams } from 'react-router-dom'
export function HERODETAILS(){
let {id}=useParams()
    return (
<>
<h1 className="title">hero details:{id}</h1>
</>
    )
}