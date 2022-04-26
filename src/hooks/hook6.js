import React, { useState } from "react";
const HookSix = () =>{
    var temp={name:"banana",price:600,qty:20};
const[Productlist,updateProduct]=useState([temp]);
const deleteproduct=(index)=>{
 Productlist.splice(index,1);
 updateProduct(Productlist=>[...Productlist]);

}
const[pname,pickName]=useState("");
const[pprice,pickPrice]=useState("");
const[pqty,pickQty]=useState("");
 
const save=()=>{
var newproduct={name:pname,price:pprice,qty:pqty};
updateProduct(Productlist=>[...Productlist,newproduct]);
pickName(" ");
pickPrice(" ");// to clear the text boxes
pickQty(" ");

}
return(
<div className="container">
    <div className="row">
        <div className="col-lg-3">
        <h4>ADD PRODUCT</h4>
        <p>enter name:
        <input type ="text" className="inputbox" onChange={txt=>pickName(txt.target.value)} value ={pname}/> 
        </p>
     <p>
enter price:
<input type ="number" className="inputbox"  onChange={txt=>pickPrice(txt.target.value)} vale={pprice}/> 
 </p>
 <p>
enter qty:
<input type ="number" className="inputbox"  onChange={txt=>pickQty(txt.target.value)} value ={pqty}/> 
 </p>
 <p>
     <button className="btn btn-primary btn-lg" onClick={save} >Save Book</button>
 </p>
 

        </div>

        
<div className="col-lg-12 text-center">
<h3>multi dimensional Example</h3>
<table className="table table-bordered shadow">
    <thead>
        <tr>
            <th>index</th>
            <th>name</th>
            <th>price</th>
            <th>qty</th>
            <th>action</th>
        </tr>
    </thead>
    <tbody>
    {
            Productlist.map((info,index)=>{
            return(
            <tr>
                <td>{index+1}</td>
                <td>{info.name}</td>
                <td>{info.price}</td>
                <td>{info.qty}</td>
                <td>
                <button onClick={deleteproduct.bind(this,index)}>delete</button>
                </td>
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
export default HookSix