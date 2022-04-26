import React, {useState} from 'react';


const HookThree = () =>{
    const[booklist,updateBook]=useState(["html", "css", "php"]);
    const[newbook, pickBook] = useState("Java Basic");
    const[message,updateMessage]=useState("");

    const save = () =>{
     updateBook( booklist=>[...booklist,newbook] );
     updateMessage(newbook  + " book added suceesfully!" );
    }
    return(
      <div className="container mt-3 text-center">
           <h4> useState() + 1 Dimensional array simple example</h4>
           <p>{message}</p>
           <p> Your Book Name Is : {newbook} </p>
           <p>
               Enter Name :
                <input type="text" onChange={ abc=> pickBook(abc.target.value)}/>
               <button onClick={save}> Add Book</button>
           </p>
           {
               booklist.map((name,index)=>{
                   return(
                       <p key={index}> {index} . {name} </p>
                   )
               })
           }

      </div>

    )

}

export default HookThree;