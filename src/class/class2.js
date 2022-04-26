import React, {Component} from 'react';
class ClassTwo extends Component{ 
constructor(){
super();
this.state = {
    booklist:["java","node.js","python","html","css","javascipt","reactjs","bootstrap","java","django",
    "mysql","api","ajax","springboot","mysql"]
}

}
render(){
    return(
        <div className='container mt-3'>
            <h3>read data from state variable</h3>
            {
                this.state.booklist.map((name,index)=>{
                    return(
                        <p key ={index}>{name}</p>
                    )
                })
            }
        </div>
    )
}
}
export default ClassTwo;