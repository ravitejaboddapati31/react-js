import React,{useState} from 'react';                 /// usestate is the predifined function of react 
const HookTwo=()=>{
    const[booklist,updateBook]=useState(["html","css","bootstrap","javascript","nodejs","python"]);//inside usestate we can give any value boolen,string,integer or any thing; 
    // undifined if we will not pass any value.
    const [newbook,pickbook]=useState("Java Basic");
    const save = ()=>{
        //booklist.push(newbook);
        updateBook(booklist.concat(newbook));//concat method
        updateBook(booklist=> [...booklist,"react.js"]);//speard operator it is advanced method
    }
return(

    <div className='container mt-3'>
        <h4>use state ()+1 dimensional array simple example </h4>
        <p>
            <button onClick={save}>add book</button>
        </p>
        {
            booklist.map((name,index)=>{
return(
    <p key ={index}>{index} ) {name}</p>
)


            })
        }
    </div>
)
}
export default HookTwo;

