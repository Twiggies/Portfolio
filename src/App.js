import React from 'react';
import ReactDOM from 'react-dom';
import './bootstrap.min.css';
import './style.css';
import background from './background.jpg';
import order from './order.png';
import chess from "./chess.png";
import {Card, Button} from 'react-bootstrap';
import { FaLinkedin, FaGithub, FaEnvelopeSquare, FaJava, FaJs, FaPython, FaHtml5 } from 'react-icons/fa';
import {SiCplusplus} from 'react-icons/si';
import {AiOutlineConsoleSql} from 'react-icons/ai';



function App() {
  return (
    <div className="App">
      <div id="home">
        <nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
          <div class="container-fluid">
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive">
              <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarResponsive">
              <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                  <a class="nav-link" aria-current="page" href="#home">Home</a>
                  </li>
                  <li class="nav-item">
                  <a class="nav-link" href="#about">About</a>
                  </li>
                  <li class="nav-item">
                  <a class="nav-link" href="#work">My Work</a>
                  </li>
                  <li class="nav-item">
                  <a class="nav-link" href="#contact">Contact</a>
                  </li>
              </ul>
              </div>
          </div>
        </nav>
        {/*------------------------Nav ends here fucko -----------------------------*/}
        <div class="background">
          <img src={background} class="img-fluid"/>
        </div>
            <div class="heading-content text-center">
              <h5>Welcome to</h5>
                <h1>My Page!</h1>
                
            </div>
      </div>
      {/*----------------------Home ends here --------------------*/}
      {/*------------------------About starts here---------------*/}
      <div id="about" class="container mt-5 pb-5">
        <div class="text-center">
          <h2 class="display-2 fw-bold">About Me</h2>
          <hr class="w-50 mb-5 mx-auto"/>
            
        </div>
        <div class="row">
          <div class="col-lg-6 col-md-6 col-sm-12">
            <img src={background} class="img-fluid"/>
          </div>
          <div class="col-lg-6 col-md-6 col-sm-12">
          <Card class="about-card">
            <Card.Body>
              <Card.Text class="about-me">
              Hello! I'm Hee Yi Xiang from Malaysia. I'm pursuing my bachelor's degree of Computer Science at Multimedia University Cyberjaya,
              and I'm a major in Software Engineering. I'm always eager to learn more about different knowledge and experience along
              this path. 
              </Card.Text>
              <Button  variant="outline-dark" size="xxl" block href="https://www.linkedin.com/in/yi-xiang-hee-a471b2208/" target="_blank">Find Me Here</Button>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Text class="about-me">
                Languages that I have learned before:
                <div class="container-fluid">
                  <FaJava size={70}/><FaJs size={70}/><SiCplusplus size={70}/><FaPython size={70}/><FaHtml5 size={70}/><AiOutlineConsoleSql size={70}/>
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
          </div>
        </div>
      </div>
      {/*------------------------About ends here---------------*/}
      {/*------------------------My Work starts here---------------*/}
      <div id="work" class="container mt-3 pb-5">
        <div class="text-center">
          <h2 class="display-2 fw-bold">My Work</h2>
          <hr class="w-50 mb-5 mx-auto"/>
            
        </div>
        <div class="row">
          <div class="col-lg-6 col-md-6 col-sm-12">
            <Card>
              <Card.Img variant="top" src={chess} class="card-img"/>
              <Card.Body>
                <Card.Title>Webale Chess</Card.Title>
                <Card.Text class="work-text">
                  A slightly altered Chess game programmed using OOP Concept, written in Java with a group of friends.  
                </Card.Text>
                <Card.Button href="https://github.com/Twiggies/Webale-Chess" class="btn btn-primary stretched link">The Repo</Card.Button>
              </Card.Body>
            </Card>
          </div>
          <div class="col-lg-6 col-md-6 col-sm-12">
            <Card>
              <Card.Img variant="top" src={order} class="card-img"  />
              <Card.Body>
                <Card.Title>Food Order System</Card.Title>
                <Card.Text class="work-text">
                  A simple system for food ordering also done with a group of friends, written in php and SQL for database managing.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>

      </div>
      {/*------------------------My Work ends here---------------*/}
      {/*------------------------Contact starts here---------------*/}
      <div id="contact" class="container w-75 mt-3 pb-5">
        <div class="text-center">
          <h2 class="display-2 fw-bold">Contact</h2>
          <hr class="w-50 mb-5 mx-auto"/>
            
        </div>
        <div>
          <p class="text-center display-3">
            You can find me on these links below!
          </p>
          <Button variant="outline-info" style={{color: "black", marginBottom: "0.5em"}} size="xxl" block href="https://www.linkedin.com/in/yi-xiang-hee-a471b2208/" target="_blank">
            Linkedin <FaLinkedin/></Button>
          <Button variant="outline-info" style={{color: "black", marginBottom: "0.5em"}} size="xxl" block href="https://github.com/Twiggies" target="_blank">
            Github <FaGithub/></Button>
          <Button variant="outline-info" style={{color: "black", marginBottom: "0.5em"}} size="xxl" block href="mailto:yixianghee@gmail.com" target="_blank">
            Email Me <FaEnvelopeSquare/></Button>
        </div>
      </div>
      {/*------------------------Contact ends here---------------*/}
      {/*-----------------------Footer Starts here----------------*/}
      <footer class="bg-dark text-white text-center text-lg-start">
        <div class="container p-4">
          <div class="row">
            <div class="col-lg-8 col-md-12 mb-4 mb-md-0">
              <p style={{fontSize: "1.7em"}}>
                Made possible with ReactJS, Bootstrap library, and some other CSS libraries
              </p>
            </div>
          </div>
        </div>

        
      </footer>
    </div> 
    
  );
}

export default App;
