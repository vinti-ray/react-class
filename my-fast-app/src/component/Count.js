import React from "react";
import "./Count.css"

class Count extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  IncreaseByOne(){
    this.setState({
        count:this.state.count+1
    })
  }

  DecreaseByOne(){
    this.setState({
        count:this.state.count-1
    })
  }


  ChangeInputValue(value){
   
    this.setState({
        count:value
        
    })
    
  }

  render() {
    return <div className="count-component">
        <p>Count  {this.state.count}</p>

        <input type="number" value={this.state.count} onChange={(e)=>{
             
            this.ChangeInputValue(e.target.value)
        }}/>
        
        <button onClick={
            ()=>{
                this.IncreaseByOne()
            }
        }>+increase</button>

        <button onClick={()=>{
            this.DecreaseByOne()
        }}




        >-decrease</button>
        <div className="count-type">
            {/* {this.state.count%2===0?(<span>Odd</span>):(<span>Even</span>)} */}


        </div>
 
 {  this.state.count>3?<p>abc</p>:<p>no abc</p>}
 
 
      </div>
    ;
  }
}

export default Count;

//Simple Counter

// Summary: 
 
// You will build a simple React App which increments/decrements count on-screen when buttons are clicked using React State.

// Topics covered: React class-based components, props, state.
