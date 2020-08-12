import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {Container, Col, Row, Card } from "react-bootstrap";
import SideBar from './components/Side_Bar.jsx'
import Header from './components/Header.jsx'
import SubNav from './components/SubNav.jsx'
import './components/Side_bar.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
    <div className="App">
         <Container fluid>
           <Row>
                {/* <Col id='page-content-wrapper'>
                   <Header />
                </Col>  */}
                <Col id="sidebar-wrapper">      
                  <SideBar />
                </Col>
                <Col id='page-content-wrapper'>
                   <Header />
                   <br />
                   <Card style={{left:"90px", border:"none"}}>
                    <SubNav />
                    </Card>
                </Col> 
             
           </Row>


            </Container>
          
            </div>
      </>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
      
    // </div>
  );
}

export default App;
