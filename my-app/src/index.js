import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// rafce
const root = ReactDOM.createRoot(document.getElementById('root'));


class HeadingComponentUsingClass extends React.Component{
  render(){
    return <img src="https://logolook.net/wp-content/uploads/2021/06/Google-Logo.png" alt="React Image"   class="center" />
  }
}

class SearchButton extends React.Component{
  render(){
    return <button class="button"/>
  }
}




const SearchAndLucky =(props)=>{
return (
     <h class = "searchandlucky">
    <button>Google {props.title}</button>
      <button>I'm Feeling {props.titletwo}</button>

     </h>
)
}
 const Language =()=>{
  return <h class = "google" >
   <p>Google offered in : हिन्दी বাংলা తెలుగు मराठी தமிழ் ગુજરાતી ಕನ್ನಡ മലയാളം ਪੰਜਾਬੀ</p>
  </h> 
 }


  root.render(
    <div>

      <HeadingComponentUsingClass/>
      <SearchButton/>
      <SearchAndLucky title="Search" titletwo="Lucky"/>
      <Language/>

    </div>

  )



