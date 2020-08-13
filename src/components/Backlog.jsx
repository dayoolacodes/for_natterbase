import React, { Component } from 'react';
import {Card, Col, Image, Row} from 'react-bootstrap'
import membr from '../img/member1.jpg';
import './Backlog.css'
import { Circle } from 'react-bootstrap-icons';


class Backlog extends Component {
    state = {  }
    render() { 
        return ( 
            <>
            <Col>
            <Card className="backlog">
               <p style={{margin: '15px'}}> Apply Gradient to </p>
            </Card>
            <Card className="backlog">
               <p style={{margin: '15px', marginBottom:'8px'}}> Apply gradient colours on the <span style={{float:"right"}}>...</span> dashboard sidenav </p> 
               <p style={{marginLeft: '10px', color: 'grey'}}>
               <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.5">
            <path d="M5.49983 0.458336C2.71534 0.458336 0.45816 2.71563 0.45816 5.5C0.45816 8.28449 2.71534 10.5417 5.49983 10.5417C8.28432 10.5417 10.5415 8.28449 10.5415 5.5C10.5415 2.71563 8.28432 0.458336 5.49983 0.458336ZM5.49983 9.625C3.22168 9.625 1.37483 7.77826 1.37483 5.5C1.37483 3.22186 3.22168 1.375 5.49983 1.375C7.77797 1.375 9.62483 3.22186 9.62483 5.5C9.62483 7.77826 7.77797 9.625 5.49983 9.625ZM7.19887 6.55096C7.37785 6.72994 7.37785 7.02018 7.19887 7.19916C7.10949 7.28853 6.99205 7.33334 6.87483 7.33334C6.75761 7.33345 6.64028 7.28865 6.55079 7.19916L5.17579 5.82416C5.08985 5.73822 5.04149 5.62169 5.04149 5.5V2.75C5.04149 2.49689 5.24671 2.29167 5.49983 2.29167C5.75294 2.29167 5.95816 2.49689 5.95816 2.75V5.31025L7.19887 6.55096Z" fill="#03293D"/>
            </g>
            </svg> &nbsp; 
            Due Aug 8 
            <span style={{float:"right", marginRight: "20px"}}> 
            <Row>   
            <Image src={membr} width="20px" height="20px" roundedCircle />
            <Image src={membr} width="20px" height="20px" roundedCircle />
            <Image src={membr} width="20px" height="20px" roundedCircle />
            <div style={{borderColor: "black"}}> +4 </div>
            </Row>
             </span>
            </p>
            </Card>
            <Card className="backlog">
               <p style={{margin: '15px', marginBottom:'8px'}}> Apply gradient colours on the <span style={{float:"right"}}>...</span> dashboard sidenav </p> 
               <p style={{marginLeft: '10px', color: 'grey'}}>
               <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.5">
            <path d="M5.49983 0.458336C2.71534 0.458336 0.45816 2.71563 0.45816 5.5C0.45816 8.28449 2.71534 10.5417 5.49983 10.5417C8.28432 10.5417 10.5415 8.28449 10.5415 5.5C10.5415 2.71563 8.28432 0.458336 5.49983 0.458336ZM5.49983 9.625C3.22168 9.625 1.37483 7.77826 1.37483 5.5C1.37483 3.22186 3.22168 1.375 5.49983 1.375C7.77797 1.375 9.62483 3.22186 9.62483 5.5C9.62483 7.77826 7.77797 9.625 5.49983 9.625ZM7.19887 6.55096C7.37785 6.72994 7.37785 7.02018 7.19887 7.19916C7.10949 7.28853 6.99205 7.33334 6.87483 7.33334C6.75761 7.33345 6.64028 7.28865 6.55079 7.19916L5.17579 5.82416C5.08985 5.73822 5.04149 5.62169 5.04149 5.5V2.75C5.04149 2.49689 5.24671 2.29167 5.49983 2.29167C5.75294 2.29167 5.95816 2.49689 5.95816 2.75V5.31025L7.19887 6.55096Z" fill="#03293D"/>
            </g>
            </svg> &nbsp; 
            Due Aug 8 
            <span style={{float:"right", marginRight: "20px"}}> 
            <Row>   
            <Image src={membr} width="20px" height="20px" roundedCircle />
            <Image src={membr} width="20px" height="20px" roundedCircle />
            <Image src={membr} width="20px" height="20px" roundedCircle />
            <div style={{borderColor: "black"}}> +4 </div>
            </Row>
             </span>
            </p>
            </Card>
            <Card className="backlog">
               <p style={{margin: '15px', marginBottom:'8px'}}> Apply gradient colours on the <span style={{float:"right"}}>...</span> dashboard sidenav </p> 
               <p style={{marginLeft: '10px', color: 'grey'}}>
               <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.5">
            <path d="M5.49983 0.458336C2.71534 0.458336 0.45816 2.71563 0.45816 5.5C0.45816 8.28449 2.71534 10.5417 5.49983 10.5417C8.28432 10.5417 10.5415 8.28449 10.5415 5.5C10.5415 2.71563 8.28432 0.458336 5.49983 0.458336ZM5.49983 9.625C3.22168 9.625 1.37483 7.77826 1.37483 5.5C1.37483 3.22186 3.22168 1.375 5.49983 1.375C7.77797 1.375 9.62483 3.22186 9.62483 5.5C9.62483 7.77826 7.77797 9.625 5.49983 9.625ZM7.19887 6.55096C7.37785 6.72994 7.37785 7.02018 7.19887 7.19916C7.10949 7.28853 6.99205 7.33334 6.87483 7.33334C6.75761 7.33345 6.64028 7.28865 6.55079 7.19916L5.17579 5.82416C5.08985 5.73822 5.04149 5.62169 5.04149 5.5V2.75C5.04149 2.49689 5.24671 2.29167 5.49983 2.29167C5.75294 2.29167 5.95816 2.49689 5.95816 2.75V5.31025L7.19887 6.55096Z" fill="#03293D"/>
            </g>
            </svg> &nbsp; 
            Due Aug 8 
            <span style={{float:"right", marginRight: "20px"}}> 
            <Row>   
            <Image src={membr} width="20px" height="20px" roundedCircle />
            <Image src={membr} width="20px" height="20px" roundedCircle />
            <Image src={membr} width="20px" height="20px" roundedCircle />
            <div style={{borderColor: "black"}}> +4 </div>
            </Row>
             </span>
            </p>
            </Card>
            <Card className="backlog">
               <p style={{margin: '15px', marginBottom:'8px'}}> Apply gradient colours on the <span style={{float:"right"}}>...</span> dashboard sidenav </p> 
               <p style={{marginLeft: '10px', color: 'grey'}}>
               <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.5">
            <path d="M5.49983 0.458336C2.71534 0.458336 0.45816 2.71563 0.45816 5.5C0.45816 8.28449 2.71534 10.5417 5.49983 10.5417C8.28432 10.5417 10.5415 8.28449 10.5415 5.5C10.5415 2.71563 8.28432 0.458336 5.49983 0.458336ZM5.49983 9.625C3.22168 9.625 1.37483 7.77826 1.37483 5.5C1.37483 3.22186 3.22168 1.375 5.49983 1.375C7.77797 1.375 9.62483 3.22186 9.62483 5.5C9.62483 7.77826 7.77797 9.625 5.49983 9.625ZM7.19887 6.55096C7.37785 6.72994 7.37785 7.02018 7.19887 7.19916C7.10949 7.28853 6.99205 7.33334 6.87483 7.33334C6.75761 7.33345 6.64028 7.28865 6.55079 7.19916L5.17579 5.82416C5.08985 5.73822 5.04149 5.62169 5.04149 5.5V2.75C5.04149 2.49689 5.24671 2.29167 5.49983 2.29167C5.75294 2.29167 5.95816 2.49689 5.95816 2.75V5.31025L7.19887 6.55096Z" fill="#03293D"/>
            </g>
            </svg> &nbsp; 
            Due Aug 8 
            <span style={{float:"right", marginRight: "20px"}}> 
            <Row>   
            <Image src={membr} width="20px" height="20px" roundedCircle />
            <Image src={membr} width="20px" height="20px" roundedCircle />
            <Image src={membr} width="20px" height="20px" roundedCircle />
            <div style={{borderColor: "black"}}> +4 </div>
            </Row>
             </span>
            </p>
            </Card>
            <Card className="backlog">
               <p style={{margin: '15px', marginBottom:'8px'}}> Apply gradient colours on the <span style={{float:"right"}}>...</span> dashboard sidenav </p> 
               <p style={{marginLeft: '10px', color: 'grey'}}>
               <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.5">
            <path d="M5.49983 0.458336C2.71534 0.458336 0.45816 2.71563 0.45816 5.5C0.45816 8.28449 2.71534 10.5417 5.49983 10.5417C8.28432 10.5417 10.5415 8.28449 10.5415 5.5C10.5415 2.71563 8.28432 0.458336 5.49983 0.458336ZM5.49983 9.625C3.22168 9.625 1.37483 7.77826 1.37483 5.5C1.37483 3.22186 3.22168 1.375 5.49983 1.375C7.77797 1.375 9.62483 3.22186 9.62483 5.5C9.62483 7.77826 7.77797 9.625 5.49983 9.625ZM7.19887 6.55096C7.37785 6.72994 7.37785 7.02018 7.19887 7.19916C7.10949 7.28853 6.99205 7.33334 6.87483 7.33334C6.75761 7.33345 6.64028 7.28865 6.55079 7.19916L5.17579 5.82416C5.08985 5.73822 5.04149 5.62169 5.04149 5.5V2.75C5.04149 2.49689 5.24671 2.29167 5.49983 2.29167C5.75294 2.29167 5.95816 2.49689 5.95816 2.75V5.31025L7.19887 6.55096Z" fill="#03293D"/>
            </g>
            </svg> &nbsp; 
            Due Aug 8 
            <span style={{float:"right", marginRight: "20px"}}> 
            <Row>   
            <Image src={membr} width="20px" height="20px" roundedCircle />
            <Image src={membr} width="20px" height="20px" roundedCircle />
            <Image src={membr} width="20px" height="20px" roundedCircle />
            <div style={{borderColor: "black"}}> +4 </div>
            </Row>
             </span>
            </p>
            </Card>
            <Card className="backlog">
               <p style={{margin: '15px', marginBottom:'8px'}}> Apply gradient colours on the <span style={{float:"right"}}>...</span> dashboard sidenav </p> 
               <p style={{marginLeft: '10px', color: 'grey'}}>
               <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.5">
            <path d="M5.49983 0.458336C2.71534 0.458336 0.45816 2.71563 0.45816 5.5C0.45816 8.28449 2.71534 10.5417 5.49983 10.5417C8.28432 10.5417 10.5415 8.28449 10.5415 5.5C10.5415 2.71563 8.28432 0.458336 5.49983 0.458336ZM5.49983 9.625C3.22168 9.625 1.37483 7.77826 1.37483 5.5C1.37483 3.22186 3.22168 1.375 5.49983 1.375C7.77797 1.375 9.62483 3.22186 9.62483 5.5C9.62483 7.77826 7.77797 9.625 5.49983 9.625ZM7.19887 6.55096C7.37785 6.72994 7.37785 7.02018 7.19887 7.19916C7.10949 7.28853 6.99205 7.33334 6.87483 7.33334C6.75761 7.33345 6.64028 7.28865 6.55079 7.19916L5.17579 5.82416C5.08985 5.73822 5.04149 5.62169 5.04149 5.5V2.75C5.04149 2.49689 5.24671 2.29167 5.49983 2.29167C5.75294 2.29167 5.95816 2.49689 5.95816 2.75V5.31025L7.19887 6.55096Z" fill="#03293D"/>
            </g>
            </svg> &nbsp; 
            Due Aug 8 
            <span style={{float:"right", marginRight: "20px"}}> 
            <Row>   
            <Image src={membr} width="20px" height="20px" roundedCircle />
            <Image src={membr} width="20px" height="20px" roundedCircle />
            <Image src={membr} width="20px" height="20px" roundedCircle />
            <div style={{borderColor: "black"}}> +4 </div>
            </Row>
             </span>
            </p>
            </Card>
            
            </Col>
            </>
         );
    }
}
 
export default Backlog;