
import "./user.css"
import ListComponent from "./ListComponent"


const User=(props)=>{

    return <div className="user-container">
<div className="name">{props.name}</div>
<div className="details">
    <span>{props.age}</span>
    <span>{props.gender}</span>
</div>
    </div>
}
export default User