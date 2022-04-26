import React from 'react';
const user= ["Ramesh", "Ganesh", "Suresh", "Mohit", "Raju"];
function Myuser(){
    return(
        <div className='container'>
            <h1> User List : { user.length } </h1>
            <div class ="row">
            {
                user.map((name, index)=>{
                    return( 
                        <p key ={index} className="col-lg-4">{index} = {name} </p> 
                    )
                })
            }
            </div>
        </div>
    )
}

export default Myuser;