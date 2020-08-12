import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {Container, Col, Row, Card } from "react-bootstrap";
import SideBar from './components/Side_Bar.jsx'
import Header from './components/Header.jsx'
import SubNav from './components/SubNav.jsx'
import Menu from './components/Menu.jsx'
import Footer from './components/Footer.jsx'
import './components/Side_bar.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
    <div className="App">
         <Container fluid>
           <Row>
                <Col id="sidebar-wrapper">      
                  <SideBar />
                </Col>
                <Col id='page-content-wrapper' style={{width:"96%"}}>
                   <Header />
                   <br />
                   <Card style={{left:"90px", border:"none", width:"90%"}}>
                    <SubNav />
                    </Card>
                   <br />
                   <Container >
                    <Row style={{width: "100%"}}>
                      <Card style={{width:"20%", border:"none"}}>
                        <Menu name="Backlog" />
                      </Card>
                      <Card style={{width:"20%", border:"none"}}>
                        <Menu name="Todo"/>
                      </Card>
                      <Card style={{width:"20%", border:"none"}}>
                        <Menu name="In Progress"/>
                      </Card>
                      <Card style={{width:"20%", border:"none"}}>
                        <Menu name="In Review"/>
                      </Card>
                      <Card style={{width:"20%", border:"none"}}>
                        <Menu name="Done"/>
                      </Card>
                      </Row>
                      </Container>
                </Col> 
           </Row>
            </Container>
            <Footer />
            </div>
      </>
  );
}

export default App;
