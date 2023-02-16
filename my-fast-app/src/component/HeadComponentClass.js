import React from "react";
let a=4
class HeadingComponentClass extends React.Component{
    constructor(){
        super()
        console.log("hello from now");
    this.state={
        a:45,
        b:47
    }

    }


    UpdateValiableValue() {
        console.log("hey from update");
        setTimeout(()=>{
            this.setState(
                {
                    a:this.state.a+1
                },
                ()=>{
                    console.log("value updated successfully");
                }
            )
        },110000)
    }
    render(){
        return (
            <div>
                <h1>Class Component--{this.props.title}</h1>
                <p>value -- {this.state.a}</p>
                {this.UpdateValiableValue()}
            </div>
        )
    }
}
export default HeadingComponentClass