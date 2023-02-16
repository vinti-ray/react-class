import React from "react";
import "./counter.css"
class Counter extends React.Component{
  constructor(){
    super();
    this.state={
    count:0
    }
  }
Increment(){
   this.setState({
   count: this.state.count+1
   })
 }
 Decrement(){
    this.setState({
        count:this.state.count-1
    })
 }

Reset(){
    this.setState({
        count:0
    })
}
 

    render(){
        return (
            <div className="counter">
                <button onClick={()=>this.Increment()}>Increment</button>
        <h1>{this.state.count}</h1>
        <button onClick={()=>this.Decrement()}>Decrement</button>
        <button onClick={()=>this.Reset()}>Reset</button>
            </div>
        )
    }
}

export default Counter

//Simple Counter

// Summary: 
 
// You will build a simple React App which increments/decrements count on-screen when buttons are clicked using React State.

// Topics covered: React class-based components, props, state.