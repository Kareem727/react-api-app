import React from 'react'
import { useState ,useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const  Hellow = (props) =>{

const token = '563492ad6f91700001000001c4f8b66bbb93484b909869982c94635e';
    
    // const {id} = useParams();
    let content = null
    const [product, setProduct] =useState(null);
    const[imagee, setImagee] =useState(null);
 const url =`https://swapi.dev/api/people/1`
 const url2 = "https://api.pexels.com/v1/curated?per_page=1"

 useEffect(() =>{
   axios.get(url2, {
    headers: {
        'Authorization': `${token}`
    }
  }).then(response =>{
       setImagee(response.data);
   })
 },[url2]);

useEffect(()=>{
axios.get(url).then(response => {
 setProduct(response.data);
})
},[url]);



if(product && imagee){
    content= 
    <div>
        <div>
            <img style={{width: 200, height: 200,}} src={imagee.photos[0].src.original}></img>
        </div>
        <div>
             <h1>{product.name}</h1>
         </div>

         <div>
             <h1>{product.height}</h1>
         </div>

         <div>
             <h1>{product.mass}</h1>
         </div>

         <div>
             <h1>{product.eye_color}</h1>
         </div>
    </div>
}
  return (
      <div>
          {content}
      </div>
   )
}

export default Hellow;