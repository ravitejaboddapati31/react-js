import React from "react";
import HookTen from './hook10';
const HookNine= ()=>{//multiple values will come in props it becomes a variable
    const userlist=[
        {name:"ramesh",myage:"30years",mygender:"male"},
        {name:"ganesh",myage:"13years",mygender:"male"},
        {name:"mohit",myage:"38years",mygender:"male"},
        {name:"rajesh",myage:"39years",mygender:"male"},
        {name:"rakesh",myage:"25years",mygender:"male"}

];
return(
<div className="container mt-3">
<div className="row">
<div className="col-lg-12 text-center">
   <h3> component re-use ,props,intraction,parent&child </h3> 
</div>
</div>
<div className="row mt-4">
    <hookTen fullname="ramesh" age ="30" gender="male"/>
    <hookTen fullname="ganesh" age ="30" gender="male"/>
    <hookTen fullname="moti" age ="30" gender="male"/>
    <hookTen fullname="trar" age ="30" gender="male"/>
    
    </div>

    <div className="row mt-4">
        {
   userlist.map((userinfo,index) => {
       return( 

           <HookTen
            fullname={userinfo.name}
            age={userinfo.myage}
            gender={userinfo.mygender}
            key={index}/>

       )
    })

    }
    </div>
    </div>

)



}
export default HookNine;