import { MD5 } from "crypto-js";

const gethash=(ts,secreteKey,publicKey)=>{
    return MD5(ts+secreteKey+publicKey).toString()
}

const fetchHeroe =async(id) =>{
let HeroUrl=`https://gateway.marvel.com/v1/public/characters/${id}`
let ts=Date.now().toString()
let apiKey="1d7cf8551c107d032a7f0b24c07ea22d"
let privateKey="d34d8df07b64fba2cbce3b28c725249deb310914"
let hash=gethash(ts,privateKey,apiKey)

let url= `${HeroUrl}?ts=${ts}&apikey=${apiKey}&hash=${hash}`

try{
    let response=await fetch(url)
    let data=await response.json()
    console.log(data.data.results)
    return(data.data.results)
}
catch(err){
console.log(err)
return
}
}

export{fetchHeroe}