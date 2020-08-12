import React, { Component } from 'react';
import {AccordionToggle} from "react-bootstrap";
import './SubNav.css'

class SubNav extends Component {
    state = { 
        days: "6"
     }
    render() { 
        return ( 
            <>
            <div className="topnav">
            
            <a href="#overview">Overview</a>
            <a href="#teams">Teams</a>
            <a className="active" href="#modules">Modules</a>
            <a href="#files">Files</a>
            <a href="#progress" style={{paddingRight:"100px"}}>Progress</a>
            <a href="#allTasks" style={{paddingLeft:"100px", color:"#23B3E8"}}>All Tasks</a>
            <a href="#toggle"><AccordionToggle /></a>
            <a href="#allModules">All Modules</a>
            <a href="#projDeadline">Project Deadline: {this.state.days}  weeks</a>
            
            </div>
            </>
         );
    }
}
 
export default SubNav;