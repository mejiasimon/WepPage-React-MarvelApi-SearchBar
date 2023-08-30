import { fetchComic } from "../../services/fetchComic"
import { useState,useEffect } from "react"
import { useParams } from "react-router-dom"
export function COMICDETAILS(){
    var IMAGE_SIZE="detail"
let {id}=useParams()
const [comic,setcomic]=useState()
console.log(id)
useEffect(()=>{
fetchComic(id)
.then((data)=>setcomic(data[0]))
.catch((err)=>console.error(err))
},[])
if(!comic){
    return
}
return(
<>
      <div className="container-hero">
        <div className="container-info">
            <div className="">
            <img
            className="img-hero"
            src={`${comic.thumbnail.path}/${IMAGE_SIZE}.${comic.thumbnail.extension}`}
            alt=""
          />
                    <div className="hero-name">{comic.name}</div>

            <div className="hero-description"><a className="button-50" href={comic.urls[1].url}>purchase</a></div>
            </div>
          <div className="hero-data">
          <div className="hero-series">
            <h1>series:</h1>
            <ol>
            {comic.stories.items.map((s) => {
                return(
                    <>
                    <div className="container-li">
                    <li key={Math.random() * 1000}>{s.name}</li>;
                    </div>
                    </>
                )
              })}
            </ol>
            <h1>creators:</h1>
            <ol>
{comic.creators.items.map((s2)=>{

    return(  <>
        <div className="container-li">
        <li key={Math.random() * 1000}>{s2.name}</li>;
        </div>
        </>)
})}

            </ol>
            <h1>price:</h1>
            <ol>
{comic.prices.map((s3)=>{

    return(  <>
        <div className="container-li">
        <li key={Math.random() * 1000}>{s3.price}</li>;
        </div>
        </>)
})}

            </ol>
          </div>
          </div>
          
        </div>
      </div>
    </>
)
}