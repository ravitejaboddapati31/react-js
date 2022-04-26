import React,{useState} from 'react';

const HookOne  = () =>{
    const citylist =["bangalore","mumbai","pune","chennai","kolkata"];
     const [bangalore,mumbai,pune,chennai,yt]=citylist;// array destaturing method 

     //console.log(useState() );
     const[counter,Mycounter]= useState(15);
     const[click,updateClick]=useState(0);
      const one =() =>{
           //alert("hi");//
           //counter=counter+5;//to use of this statement waste
           Mycounter(counter+5);
           updateClick(click+1);
      
      }   
      const two = () =>{
          Mycounter(counter-5);
          updateClick(click-1);
      }



    return(
        <div className="container mt-4 text-center">
            <h3> ReactJs State Management Example-1 </h3>
            <p>{citylist[2]}</p>  
            <p>{bangalore}</p> 
            <p>{pune}</p>
            <p>{yt}</p>
            <p>{counter}</p>
            <p> the total clicks are:{click} </p>
            <button onClick ={one} className="btn btn-primary m-3">click to+by 5</button> 
            <button onDoubleClick={two} className="btn btn-danger m-3"> 2 click to-by 5</button>
        </div>
    )
}

export default HookOne;
