import { useState } from "react";
const HookSeven =() =>{
    var example={tnumber:"VEHICAL1",type:"small",transportroot:"bujuarga",driver:"akash yadav",mobileno : 99797979};
    const[Transportlist,updateTransport]=useState([example]);
    const deleteTransport=(index)=>{
        Transportlist.splice(index,1);
        updateTransport(Transportlist=>[...Transportlist]);
       }
       const[ptnumber,pickTransportNumber]=useState("");
       const[ptype,pickType]=useState("");
       const[ptrasportroot,pickRootName]=useState("");
       const[pdriver,pickDriver]=useState("");
       const[pmobileno,pickDriverNum] =useState("");

       const save=()=>{
        var newTransport={tnumber:ptnumber,type:ptype,transportroot:ptrasportroot,driver:pdriver,mobileno:pmobileno};
        updateTransport(Transportlist=>[...Transportlist,newTransport]);
        pickTransportNumber("");
        pickType("");
        pickRootName("");
        pickDriver("");
        pickDriverNum("");

       }
       return(
           <body>
<div className="container">
<div className="row">
<div className="col-lg-3">
<div className="card shadow border-warning">
<div className="card-header text-center text-white bg-danger">
    <p>New Transport</p>
</div>
<div className="card-body">
<p>Transport number:</p>
        <p><input type ="text" className="form-control" onChange={txt=>pickTransportNumber(txt.target.value)} value ={ptnumber}/> 
        </p>
        <p>Type:</p>
        <p><input type ="text" className="form-control" onChange={txt=>pickType(txt.target.value)} value ={ptype}/> 
        </p>
        <p>Transport Root:</p>
        <p><input type ="text" className="form-control" onChange={txt=>pickRootName(txt.target.value)} value ={ptrasportroot}/> 
        </p>
        <p>Driver :</p>
       <p><input type ="text" className="form-control" onChange={txt=>pickDriver(txt.target.value)} value ={pdriver}/> 
        </p>
        <p>Mobile no:</p>
        <p><input type ="number" className="form-control" onChange={txt=>pickDriverNum(txt.target.value)} value ={pmobileno}/> 
        </p>
        <div className="text-center">
     <button className="btn btn-primary btn-lg" width="100%"  onClick={save} > Save</button>
 </div>
 
</div>
</div>
</div>
<div className="col-lg-9">
<h3 className="text-primary"> Manage Transport-1</h3>
<table className="table table-bordered shadow">
    <thead className="text-danger">
        <tr>
            <th>T-ID</th>
            <th>T-Number</th>
            <th>Type</th>
            <th>Transport Root</th>
            <th>Driver</th>
            <th>Mobile NO</th>
            <th>Action</th>
        
        </tr>
        </thead>
        <tbody>
        {
            Transportlist.map((info,index)=>{
            return(
            <tr>
                <td>{index}</td>
            
                <td>{info.tnumber}</td>
                <td>{info.type}</td>
                <td>{info.transportroot}</td>
                <td>{info.driver}</td>
                <td>{info.mobileno}</td>
                <td>
                <button className="btn btn-warning btn-sm" onClick={deleteTransport.bind(this,index)}>+Root master</button>
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

        </body>
       )
        
        
}

export default HookSeven;