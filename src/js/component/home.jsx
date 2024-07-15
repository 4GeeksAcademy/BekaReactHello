import React from "react";
import ReactImage from "../../img/react.jpg"
import MyCard from "../../js/index"; 


const Home = () => {
  return (

    <div>
      <nav class="navbar fixed-top navbar-expand-lg bg-body-tertiary bg-black text-white">
        <div class="container-fluid ">
          <a class="navbar-brand text-white" href="#">Start Bootstrap</a>
          <button class="navbar-toggler text-white" type="button " data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler text-white">≡</span>
          </button>
          <div class="collapse navbar-collapse justify-content-end" id="navbarTogglerDemo02">
            <ul class="navbar-nav ">
              <li class="nav-item">
                <a class="nav-link text-white" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white" href="#">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white" href="#">Services</a>
              </li><li class="nav-item ">
                <a class="nav-link text-white" href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div class="d-block w-100">
        <div class="card " id="text" >
          <div class="card-body ">
            <div class="d-block">
              <h1 class="card-title">A Warm Welcome!</h1>
              <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, ipsam, eligendi, in quo sunt possimus non incidunt odit vero  similique quaerat nam nobius illo aspernatur vitae fugiat numquam repellat</p>
              <a href="#" class="btn btn-primary ">Call to action!</a>
            </div>
          </div>
        </div>
        <div className="row" id="fotos">
          <MyCard 
            title="Card title 1" 
            text="Some quick example text to build on the card title and make up the bulk of the card's content." 
            buttonText="Go somewhere" 
            imageSrc={ReactImage} 
          />
          <MyCard 
            title="Card title 2" 
            text="Some quick example text to build on the card title and make up the bulk of the card's content." 
            buttonText="Go somewhere" 
            imageSrc={ReactImage} 
          />
          <MyCard 
            title="Card title 3" 
            text="Some quick example text to build on the card title and make up the bulk of the card's content." 
            buttonText="Go somewhere" 
            imageSrc={ReactImage} 
          />
          <MyCard 
            title="Card title 4" 
            text="Some quick example text to build on the card title and make up the bulk of the card's content." 
            buttonText="Go somewhere" 
            imageSrc={ReactImage} 
          />
        </div>
      </div>
      <div class="card-footer bg-body-tertiary bg-black text-white" id="footer">
          <p id="copyright">Copyright © Your Website 2018</p>
        </div>
    </div>
  );
};


export default Home;
