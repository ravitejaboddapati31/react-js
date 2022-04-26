import React, {useState} from 'react';
const HookFour = () =>{
    const[booklist,updateBook]=useState(["html", "css", "php"]);
    const[newbook, pickBook] = useState("Java Basic");
    const[message,updateMessage]=useState("");

    const save = () =>{
     updateBook( booklist=>[...booklist,newbook] );
     updateMessage(newbook  + " book added suceesfully!" );
    }
const deletebook=(index)=>{

booklist.splice(index,1);
updateBook( booklist=>[...booklist] );
updateMessage("book deleted suceessfully!");
 
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
           <h3>book length:{booklist.length}</h3>
           <table className='table table-bordered'>
               <thead>
                <tr>
                <th>SI NO</th>
                <th>BOOK NAME</th>
                <th>ACTION</th>
                </tr>
               </thead>
               <tbody>
                   {
                         booklist.map((name,index)=>{
                           return(
                        <tr key ={index}>
                            <td>{index}</td>
                            <td>{name}</td>
                            <td>
            <button className='btn btn-primary btn-sm ' onClick={deletebook.bind(this,index)}>Delete</button>
            </td>

                        </tr>


                           )


                         })


                   }

               </tbody>
           </table>

      </div>

    )

}

export default HookFour;