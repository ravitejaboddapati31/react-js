
import React from 'react';
const books=["javascript","php","reacyt.js","python","django","mysql","sql","mangodb","c","c++","java"];
const Mybook = () =>{
    return(
        <div className="container">
            <h1 className='text-danger'> Book List </h1>
         <div class ="row">
            {
               books.map((name,index)=>{
                 return(
                     <p key ={index} className="col-lg-4">{index} = {name}</p>
                 )
               })
            }

         </div>
        </div>
    )
}

export default Mybook;