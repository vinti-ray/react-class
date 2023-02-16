import React from "react";
import { useState } from "react";
import HeadingComponentClass from "./component/HeadComponentClass";
import Count from "./component/Count";
import User from "./List/User";
// import Demo from './component/Demo'

/*Create a page with a textarea, where a user writes their introduction/bio in mixed case. There will be a button on click of which the bio will change to upper case and show on a paragraph element below the textarea.*/

// function App(){
//   return (
//     <div>
//       <input></input>
//     </div>
//   )
// }

// function App() {
//   const [counter,setCounter]=useState(0)
//   return (
//     <div>
//     <button
//     onClick={()=>{
//       setCounter(counter+1)
//     }}
//     >+</button>
//       <h2>{counter}</h2>
//       <button
//         onClick={()=>{
//           setCounter(counter-1)
//         }}
//       >-</button>
//     </div>
//   )
// }

// class App extends React.Component{
//   constructor(props){
//     super(props)

//     this.state={
//       counter:0
//     }
//   }
//   render(){
//     const name="buddy"
//     return(
//           <div>
//     <button
//     onClick={()=>{
//       this.setState({
//         counter:this.state.counter+1
//       })
//     }}

//     >+</button>
//       <h2>{this.state.counter}</h2>
//       <button
//          onClick={()=>{
//           this.setState({
//             counter:this.state.counter-1
//           })
//         }}

//       >-</button>
//     </div>
//     )
//   }
// }

// const people=[
//   {   "name":"B",
//       "age":34,
//       "gender":"F"
//   },
//   {"name":"A",
//   "age":34,
//   "gender":"M"
//   },
//   {"name":"C",
//   "age":34,
//   "gender":"F"
//   },
//   {"name":"F",
//   "age":34,
//   "gender":"M"
//   },
//   {"name":"Z",
//   "age":34,
//   "gender":"M"
//   }
// ]

// function App() {
//   return (
//     <div>
//       <p>heyy</p>
//       <HeadingComponentClass />
//       <Count />
//      {people.map((one)=>{
//       return <p className="hehe" key={one.name}>{one.name}</p>
//      })}
//     </div>
//   );
// }

// InputHandler(){
  
// }
// function App(){

//   const [bio,setBio]=useState("")

//   return (<div>
//     <textarea value={bio} onChange ={(e)=>{
//         setBio(e.target.value)
//     }}></textarea>
//     <br/>
//     <button className="button" onClick={()=>{
//       let newBio=bio
//       setBio(newBio.toUpperCase())

//     }}>Change to UpperCase</button>
//     <p>{bio}</p>
//   </div>)
// }
/*Create a page with a textarea, where a user writes their introduction/bio in mixed case. There will be a button on click of which the bio will change to upper case and show on a paragraph element below the textarea.*/


// const country=["India","canada","Russia","Ireland","Australia"]


// function App() {

//   const [FirstName,setFName]=useState("")
//   const [LastName,setLName]=useState("")

//   const [open,setOpen]=useState(false)

//   const handleOpen=(e)=>{
// console.log(e);
//     setOpen(!open)
  
//   }
//      return <div>
//       <form>
//        First Name: <input placeholder="please enter your name" type="text" value={FirstName} onChange={(e)=>{
    
//            setFName(e.target.value)
//        }}/>
//        <br/>
//        Last Name: <input placeholder="please enter your name" type="text" value={LastName} onChange={(e)=>{
        
//            setLName(e.target.value)
//        }}
//        />
//    <br/>
      
//       Gender <input type ="radio" value="Male" name="gender"/> Male
//        <input type="radio" value="Female" name="gender" /> Female
//        <input type="radio" value="Other" name="gender" /> Other
//        <br/>
 

//        <div className="dropdown">
//         <input onClick ={handleOpen}/>  Dropdown
//         {open ?(<ul className="country">
//           <li className="India">
//          <button>India</button>
//           </li>
//           <li className="USA">
//      <button>America</button>
//           </li>
//           <li className="canada">
//      <button >Canada</button>
//           </li>

//           <li className="china">
//      <button>China</button>
//           </li>

//           </ul>):null}
//        </div>
// <br/>
// <input type="checkbox"/> Do you want to receive marketing emails
// <br/>
// <button type="submit">Submit</button>
//       </form>
//     </div>

// }


/**Create a user registration form with first name, last name, gender, country, whether the user wants to receive marketing emails, and the profile picture for the user. And on submission of the form, validate whether all fields are
populated or not, if not then show an error. On successful submission, log the details in the browser console.
 */
export default App;

