import React from 'react';

const product = [
    {name:"Apple", price:300, aty:10, details:"Good"},
    {name:"Mango", price:3700, aty:140, details:"better"},
    {name:"Orange", price:3070, aty:120, details:"best"},
    {name:"Banana", price:3050, aty:150, details:"Good"},
    {name:"Laptop", price:3030, aty:104, details:"better"}
];
const Productlist = () =>{

    return(
        <div className='container text-center'>
            <h3> Product List </h3>
            <table class ="table table-bordered shadow">
                <thead>
                    <tr>
                        <th>Sl No</th>
                        <th>Book Name</th>
                        <th>Book Price</th>
                        <th>Book Quantity</th>
                        <th>Details</th>
                    </tr>
                </thead>
                <tbody>
                    {
product.map((pinfo,index)=>{
    return(
        <tr key ={index}>
            <td>{index}</td>
            <td>{pinfo.name}</td>
            <td>{pinfo.price}</td>
            <td>{pinfo.aty}</td>
            <td>{pinfo.details}</td>
        </tr>
    )

})

                    }
                </tbody>
            </table>
        </div>
    )
}

export default Productlist;