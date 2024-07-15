import React from "react";
import ReactDOM from "react-dom/client";

import "../styles/index.css";

import Home from "./component/home.jsx";


const MyCard = ({ title, text, buttonText, imageSrc }) => {
    return (
      <div class="card col-12 col-md-3" id="card">
        <img src={imageSrc} class="card-img-top" alt={title} />
        <div class="card-body text-center">
          <h5 class="card-title">{title}</h5>
          <p class="card-text">{text}</p>
          <a href="#" class="btn btn-primary">{buttonText}</a>
        </div>
      </div>
    );
  };
  
  export default MyCard;

ReactDOM.createRoot(document.getElementById('app')).render(<Home/>);

