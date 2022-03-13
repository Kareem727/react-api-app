import React from 'react'
import { useState ,useEffect } from 'react';
import axios from 'axios';
const  Hellow = (props) =>{
    const url ="https://swapi.dev/api/people/1"
 const [product, setProduct] =useState();
 
 useEffect(()=>{
  axios.get(url).then( response =>{
      setProduct(response.data)
  })
 },[url])

 if(product){
     return(
         <div>
             <h1>{product.name}</h1>
         </div>
     )
 }
  return (
      <div>

      </div>
   )
}

export default Hellow;