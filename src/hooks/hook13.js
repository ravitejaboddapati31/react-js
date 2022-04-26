import React, { useState, useEffect } from "react";
import {Link} from 'react-router-dom';
import axios from "axios";

const HookThirteen = () => {
    const [book, updateBook] = useState([]);
    const [user, updateuser] = useState([]);
    const [city, updatecity] = useState([]);
    const [com, updatecom] = useState([]);
    const getbook = () => {
        axios.get("http://localhost:1234/booklist")
            .then(Response => {
                updateBook(Response.data);
            })
    }
    const getuser = () => {
        axios.get("http://localhost:1234/userlist")
            .then(Response => {
                updateuser(Response.data);
            })
    }
    const getcity = () => {
        axios.get("http://localhost:1234/citylist")
            .then(Response => {
                updatecity(Response.data);
            })
    }
    const getcom = () => {
        axios.get("http://localhost:1234/companylist")
            .then(Response => {
                updatecom(Response.data);
            })
    }

    useEffect(() => {
        getbook();
        getuser();
        getcity();
        getcom();
    }, [1])

    const [message, updatemessage] = useState([]);
    const [bookname, pickname] = useState([]);
    const [bookprice, pickprice] = useState([]);
    const [bookqty, pickqty] = useState([]);
    const save = () => {
        var url = "http://localhost:1234/booklist";
        var newbook = {
            "name": bookname,
            "price": bookprice,
            "qty": bookqty,
            "instock": true
        };
        axios.post(url, newbook)
            .then(Response => {
                updatemessage(bookname + " Book Saved Successfully !");
                pickname(""); pickprice(""); pickqty("");
                getbook(); //to reload the booklist
            })
    }

    const delbook = (id) => {
        var url = "http://localhost:1234/booklist/" + id;
        axios.delete(url)
            .then(Response => {
                updatemessage("Book Deleted Successfully !");
                getbook();
            })
    }

// booklist ends

const [msg, updatemsg] = useState([]);
const [username, pickuser] = useState([]);
const [usermobile, pickmobile] = useState([]);
const store = () => {
    var url = "http://localhost:1234/userlist";
    var newuser = {
        "name": username,
        "Mobile": usermobile,
    };
    axios.post(url, newuser)
        .then(Response => {
            updatemsg(username + " User Saved Successfully !");
            pickuser(""); pickmobile("");
            getuser(); //to reload the userlist
        })
}

const deleteuser = (id) => {
    var url = "http://localhost:1234/userlist/" + id;
    axios.delete(url)
        .then(Response => {
            updatemsg("User Deleted Successfully !");
            getuser();
        })
}


    return (
        <div className="container">
            <p className='text-center'>
                <input type="text" placeholder='enter book name' className="mx-2" onChange={abc => pickname(abc.target.value)} value={bookname} />
                <input type="text" placeholder='enter book price' className="mx-2" onChange={abc => pickprice(abc.target.value)} value={bookprice} />
                <input type="text" placeholder='enter book quantity' className="mx-2" onChange={abc => pickqty(abc.target.value)} value={bookqty} />
                <button className='btn btn-primary m-2' onClick={save}>Save</button>
            </p>
            <p className="text-center">{message}</p>
            <div className="row">
                <div className="col-lg-12">
                    <h4 className="text-center">Total Books - {book.length}</h4>
                    <table className="table table-bordered mt-4 shadow">
                        <thead>
                            <tr className="text-center">
                                <th>Id</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Qty</th>
                                <th>Stock</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody className="text-center">
                            {
                                book.map((name, index) => {
                                    return (
                                        <tr key={index}>
                                            <td> {name.id} </td>
                                            <td> {name.name} </td>
                                            <td> {name.price} </td>
                                            <td> {name.qty} </td>
                                            <td>{name.instock.toString()}</td>
                                            <td><Link to={`/hook13/${name.id}`} className="btn btn-warning m-2">Edit</Link>
                                                <button className="btn btn-info" onClick={delbook.bind(this, name.id)}>Delete</button></td>

                                            

                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            <hr/>
            <div className="row">
            
            <p className='text-center mt-4'>
                <input type="text" placeholder='enter user name' className="mx-2" onChange={xyz => pickuser(xyz.target.value)} value={username} />
                <input type="text" placeholder='enter user mobile no.' className="mx-2" onChange={xyz => pickmobile(xyz.target.value)} value={usermobile} />
                <button className='btn btn-primary m-2' onClick={store}>Save</button>
            </p>
            <p className="text-center">{msg}</p>
                <div className="col-lg-12">
                    <h4 className="text-center">Total Users - {user.length}</h4>
                    <table className="table table-bordered mt-4 shadow">
                        <thead>
                            <tr className="text-center">
                                <th>Id</th>
                                <th>Name</th>
                                <th>Mobile</th>
                            </tr>
                        </thead>
                        <tbody className="text-center">
                            {
                                user.map((user, index) => {
                                    return (
                                        <tr key={index}>
                                            <td> {user.id} </td>
                                            <td> {user.name} </td>
                                            <td> {user.Mobile} </td>
                                            <td><button className="btn btn-danger" onClick={deleteuser.bind(this, user.id)}>Delete</button></td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            <hr/>
            <div className="row">
                <div className="col-lg-12">
                    <h4 className="text-center">Total Cities - {city.length}</h4>
                    <table className="table table-bordered mt-4 shadow">
                        <thead>
                            <tr className="text-center">
                                <th>Id</th>
                                <th>City</th>
                            </tr>
                        </thead>
                        <tbody className="text-center">
                            {
                                city.map((place, index) => {
                                    return (
                                        <tr key={index}>
                                            <td> {place.id} </td>
                                            <td> {place.city} </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            <hr/>
            <div className="row">
                <div className="col-lg-12">
                    <h4 className="text-center">Total Companies - {com.length}</h4>
                    <table className="table table-bordered mt-4 shadow">
                        <thead>
                            <tr className="text-center">
                                <th>Id</th>
                                <th>Name</th>
                            </tr>
                        </thead>
                        <tbody className="text-center">
                            {
                                com.map((office, index) => {
                                    return (
                                        <tr key={index}>
                                            <td> {office.id} </td>
                                            <td> {office.name} </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default HookThirteen;