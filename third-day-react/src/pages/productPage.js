import react, {useState} from "react"


function ProductPage(){
    const [count,setCount]=useState(0)
   return( 
   <div>
   <h1>Product page</h1>
   <p  onClick={()=>{
    setCount(count+5)
   }}>Increment count--{count}</p>


   </div>)
}
export default ProductPage