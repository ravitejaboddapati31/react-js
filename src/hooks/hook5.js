import React, {useState} from 'react';

const HookFive = () =>{
    const[city, updateCity] = useState([]);
    const[newcity, pickCity] = useState("");

    const save = () =>{
        updateCity( city=>[...city, newcity]);
    }
     const deleteCity = (index) =>{
         city.splice(index, 1);
         updateCity( city=>[...city] );
     }

     return(
         <div className='container mt-3 text-center'>
             <h3> useState() add, list delete Example </h3>
             <p>
                 Enter City Name : 
                 <input type="text" onChange={obj=>pickCity(obj.target.value)} />
                 <button onClick={save} className="btn btn-btn-primary m-2"> Save City </button>
             </p>
             <div className='row mt-3'>
                {
                    city.map((name, index)=>{
                        return(
                            <div className='col-lg-3 mb-3' key={index}>
                                <div className='p-4'> 
                                    <p>{name}</p>
                                    <button onClick={deleteCity.bind(this, index)} className="btn btn-danger m-2"> Delete </button>
                                </div>    
                            </div>
                        )
                    })
                }
             </div>
         </div>
     )

}

export default HookFive;