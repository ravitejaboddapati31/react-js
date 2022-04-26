import React, { useState, useEffect } from "react";
import {Link, useParams} from 'react-router-dom';
import axios from "axios";

const HookFourteen= () =>{
    const{bookid} = useParams();
    const [message, updatemessage] = useState("Please Edit Item Info");
    const [bookname, pickname] = useState("Abc");
    const [bookprice, pickprice] = useState("1000");
    const [bookqty, pickqty] = useState("10");

    const getbookinfo = () =>{
        axios.get("http://localhost:1234/booklist/"+bookid)
        .then(response=>{
            pickname(response.data.name);
            pickprice(response.data.price);
            pickqty(response.data.qty);
        })
    }
    useEffect(()=>{
        getbookinfo();
    },[1]);

  const updatebook = () =>{
        var url = "http://localhost:1234/booklist/"+bookid;
        var bookdata = {
           "name": bookname,
            "price": bookprice,
            "qty": bookqty,
            "instock":true
             };
             axios.put(url, bookdata)
             .then(response=>{
                 updatemessage(bookname + "updated Successfully !")
             })
   }
   
    return(
        <div className='container text-center'>
             <p className="text-center">{message}-{bookid}</p>
           <p className='text-center'>
                <input type="text" placeholder='enter book name' className="mx-2" onChange={abc => pickname(abc.target.value)} value={bookname} />
                <input type="text" placeholder='enter book price' className="mx-2" onChange={abc => pickprice(abc.target.value)} value={bookprice} />
                <input type="text" placeholder='enter book quantity' className="mx-2" onChange={abc => pickqty(abc.target.value)} value={bookqty} />
                <button className='btn btn-primary m-2' onClick={updatebook}>update book details</button>
            </p>
            <p>
                <Link className="btn btn-warning" to="/hook12"> Cancel The Edit </Link>
            </p>
        </div>
    )
}

export default HookFourteen;