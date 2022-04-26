import React from 'react';
const HookTen =(props) =>{
return(
    <div className="col-lg-3 mb-3">
        <div className="p-4 rounded bg-light text-primary">
            <h5>{props.fullname}</h5>
            <p>{props.age}</p>
            <p>{props.gender}</p>
            
            </div>
        
        </div>
)
}
export default HookTen;