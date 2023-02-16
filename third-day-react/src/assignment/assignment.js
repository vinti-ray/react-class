import axios from "axios"
import React, {useState,useEffect} from "react"

function FetchApi(){
  const [list,setList]=useState()

    const FetchApi=()=>{
      if(!list){


     axios.get("https://jsonplaceholder.typicode.com/posts").then((response)=>{setList(response.data)})
    }
  }


return(
    <div>
        <h1>List {FetchApi()}</h1>
        

        {list && list.length>0 &&(
         <ol>
           {list.map(a=>{

                return <li key={a.title}>{(a.title)}
                </li>
           })}

         </ol>
        )}

    </div>
)
}
export default FetchApi

// return (
//     <div>
//       <h1>json placeholder List</h1>
//       {jsonplaceholderList && jsonplaceholderList.length > 0 && (
//         <ol>
//           {jsonplaceholderList.map((json, index) => (
//             <li>
//               {" "}
//               {json.name} [ Price - {json.priceUsD}] |{" "}
//               <a href={json.explorer}>Details</a>{" "}
//             </li>
//           ))}
//         </ol>
//       )}
//     </div>
//   );
// };

//const api = "https://jsonplaceholder.typicode.com/posts";

// const App = () => {
//     const [jsonplaceholderList, setJsonplaceholder] = useState();
  
//     useEffect(() => {
//       if (!jsonplaceholderList) {
//         axios.get(api).then((response) => {
//           console.log(response.data.data);
//           setJsonplaceholder(response.data.data);
//         });
//       }
//     });