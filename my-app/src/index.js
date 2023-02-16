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
    return <input class="button"/> 
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
  <p>Google offered in : <a href='#'>বাংলা </a>  <a href='#'> తెలుగు </a>  <a href='#'></a>  <a href='#'> தமிழ் </a> <a href='#'> ગુજરાતી </a><a href='#'> ಕನ್ನಡ </a><a href='#'> മലയാളം </a><a href='#'> ਪੰਜਾਬੀ </a></p>
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



