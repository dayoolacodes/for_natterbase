import React, { Component } from 'react';
import {Card} from "react-bootstrap"
import './MenuPane.css'
import SideButton from './SideButton.jsx'

class MenuPane extends Component {
    state = {  }
    render() { 
        return ( 
            <>
            <Card className="menuPane" style={{backgroundImage:"linear-gradient(white, #E5E5E5)"}}>                
            </Card>
            <Card className="menuPane" style={{backgroundImage:"linear-gradient(white, #E5E5E5)"}}>                
            </Card>
            <Card className="menuPane" style={{backgroundImage:"linear-gradient(white, #E5E5E5)"}}>                
            </Card>
            <Card className="menuPane" style={{backgroundImage:"linear-gradient(white, #E5E5E5)"}}>                
             
             <SideButton />
            </Card>
            </>
         );
    }
}
 
export default MenuPane;