import React, { Component } from 'react';
import './Menu.css'
import { Row, Col } from "react-bootstrap";

class Menu extends Component {
    state = {  }
    render() { 
        return ( 
            <>
            <div className="menu">
                
                <Col >
                <div>
                {this.props.name}
                <span style={{marginLeft:"50%", fontSize:"bold"}} >...</span>
                </div>
                </Col>
              

            </div>
            </>
         );
    }
}
 
export default Menu;