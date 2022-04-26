import React, {Component} from 'react';

class ClassOne extends Component{ 
    constructor(){
        super(); //whenever we are extending super function is reqired
        this.state={counter:10,click:0}
        
    }
  one=()=>{
      this.setState({
          counter:this.state.counter+5,
          click:this.state.click+1
      })
    }
    two=()=>{
        this.setState({
            counter:this.state.counter-5,
            click:this.state.click+1

    })
}
render(){//render will call every time whenever we use set state
    alert("iam from render!"); //we can remove also
return(
    <div className='container mt-3 text-center'>
<h3>Set state() class component</h3>
<h1 className='text-warning'>'The value is':{this.state.counter}</h1>
<p>TOTAL CLICK: {this.state.click}</p>
<button onClick={this.one} className="btn btn-outline-danger btn-lg">Click TO + by 5</button>
<br/>
<button onClick={this.two} className="btn btn-outline-danger btn-lg">Click TO - by 5</button>
</div>


)
}
}
export default ClassOne;