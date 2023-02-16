import { useParams } from "react-router-dom"

function PaymentPage(){
    const params=useParams()
    return <h1>Payment page--{params.price}</h1>
 }
 export default PaymentPage