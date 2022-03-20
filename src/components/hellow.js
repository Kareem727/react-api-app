import React from 'react'
import { useState ,useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
const  Hellow = (props) =>{
    
    const {id} = useParams();
    const [product, setProduct] =useState(null);
 const url =`https://swapi.dev/api/people/${id}`
useEffect(()=>{
axios.get(url).then(response => {
 setProduct(response.data);
})
},[url]);
let content = null

if(product){
    content= 
    <div>
        <div>
             <h1>{product.name}</h1>
         </div>

         {/* <div>
             <h1>{product.height}</h1>
         </div>

         <div>
             <h1>{product.mass}</h1>
         </div>

         <div>
             <h1>{product.eye_color}</h1>
         </div> */}
    </div>
}
  return (
      <div>
          {content}
      </div>
   )
}

export default Hellow;