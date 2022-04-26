import React,{useState,useEffect} from "react";
const HookEleven = ()=> {
    const[userlist,updatelist]=useState([]);
    const[productlist,updateProduct]=useState([]);
    const[booklist,updateBook]=useState([]);
    const getuser=()=>{
        fetch("user.json")
        .then(Response=>Response.json())
        .then(userArray=>{
            updatelist(userArray);
        })
    }
    const getproduct=()=>{
        fetch("product.json")
        .then(Response=>Response.json())
        .then(productArray=>{
            updateProduct(productArray);
        })

    }
    useEffect(()=>{              //once page will load automatically it will come!
        getproduct();
        
        })

        const getbook=()=>{
            fetch("book.json")
            .then(Response=>Response.json())
            .then(bookArray=>{
                updateBook(bookArray);
            })
    
        }
    
        useEffect(()=>{              
            getbook();
            
            })

    return(
<div className="container mt-3">
<div className="row">
<div className="col-lg-4">
    <h3>react usestate() ftech() api</h3>
    <button onClick={getuser}>Load users</button>
    {
                        userlist.map((name, index)=>{
                            return(
                                <p key={index}> {name} </p>
                            )
                        })
                    }

    
    </div>
    <div className="col-lg-4">
    <h3>totalproducts :{productlist.length}</h3>
    <button onClick={getproduct}>product</button>  
    {
            productlist.map((name, index)=>{
                    return(
                 <p key={index}> {name} </p>
                 )
            })
    }

        
    </div>
    <div className="col-lg-4">
        <h3>book list:</h3>
        <button onClick={getbook}>booklist</button>  
        
        {
            booklist.map((name, index)=>{
                    return(
                 <p key={index}> {name} </p>
                 )
            })
    }
        </div>

    </div>
    </div>

    )


}
export default HookEleven;