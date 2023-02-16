import react, {useState} from "react"
import SubmitPage from "./OnSubmit"
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form";
import "./form.css"


function RegistrationForm() {

  const [FirstName,setFName]=useState("")
  const [LastName,setLName]=useState("")

  const [open,setOpen]=useState(false)
  const [country,setCountry]=useState("")


  const handleOpen=(e)=>{
    setOpen(!open)
  }

  const handleFormSubmit=(e)=> {
    e.preventDefault()
    if(FirstName&&LastName&&country){
        alert("if you want to proceed please click ok")
    }else{
        alert("please enter all field")
    }
  }
     return  <div className="form">
   
        <br/>
      <form onSubmit={handleFormSubmit}

      >
       First Name: <input placeholder="please enter your name" type="text" value={FirstName} onChange={(e)=>{
           setFName(e.target.value)
       }}/>
       <br/>
       <br/>
       Last Name: <input placeholder="please enter your name" type="text"   value={LastName} onChange={(e)=>{
           setLName(e.target.value)
       }} 
       />
   <br/>
   <div className="gender"  >
      Gender: <input type ="radio" value="Male" name="gender"/> Male
       <input type="radio" value="Female" name="gender" /> Female
       <input type="radio" value="Other" name="gender" /> Other
       <br/>
       </div>
<br/>

<input type="checkbox"/> Do you want to receive marketing emails
<br/>


<section>
    <label>
        Country
    </label>

    <select value={country} onChange={(e)=>{
        setCountry(e.target.value)
    }}>
        <option >Options</option>
    <option value="Canada">Canada</option>
    <option value="India">India</option>
    <option value="Usa">Usa</option>
    <option value="Ireland">Ireland</option>
 
    <option value="Finland">Finland</option>
    <option value="Morocco">Morocco</option>
    </select>
</section>


     <button type="submit" className="submit">
          submit
     </button>
     

      </form>
    </div>

}
export default RegistrationForm