import { useState,useEffect} from  'react';
import axios from "axios";

const HookTwelve=()=>{
    const[commentlist,updateComment]=useState([]);
   const getcomment=()=>{
       axios.get("https://jsonplaceholder.typicode.com/comments")//get  is for bring the data
.then(Response=>{
updateComment(Response.data);
})
}
useEffect(()=>{//call back function
getcomment();
})
return(
<div className='container mt-4'>
  <div className='row'>
      <div className='col-lg-12 text-center'>
          <h3>usestate(),useEffect(),axios.get() example</h3>
          <p>Total comments:{commentlist.length}</p>
          {
              commentlist.map((mycomment,index)=>{
return(
    <div className='col-lg-6 p-4 mb-4' key={index}>
        <p>{mycomment.body}</p>
        </div>

)


})
}
</div>
      
</div> 
</div>


)
}

export default HookTwelve;