import React, { Component } from 'react';
import { Button, Form, FormControl, InputGroup, Row, Container, Col} from "react-bootstrap";
import fcmb_logo from '../img/fcmb_logo.png';
import chioma_pic from '../img/chioma_davies.jpg';
import { FiSearch, FiBell } from 'react-icons/fi';
import Image from 'react-bootstrap/Image'
import { Bell, BellFill } from 'react-bootstrap-icons'
import './Header.css';

class Header extends Component {
    state = { 
        name: "Chioma Davies",
        email: "Chioma@natterbase"
     }
    render() { 
        return ( 
            <>
            <div className="Header ">
            <Form>
            <Form.Group as={Row} controlId="formPlaintextPassword">
            
            <Form.Label >
            <Button variant="">
            <svg width="28" height="20" viewBox="0 0 28 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M27 0H1C0.734784 0 0.48043 0.105357 0.292893 0.292893C0.105357 0.48043 0 0.734784 0 1C0 1.26522 0.105357 1.51957 0.292893 1.70711C0.48043 1.89464 0.734784 2 1 2H27C27.2652 2 27.5196 1.89464 27.7071 1.70711C27.8946 1.51957 28 1.26522 28 1C28 0.734784 27.8946 0.48043 27.7071 0.292893C27.5196 0.105357 27.2652 0 27 0Z" fill="#03293D"/>
            <path d="M1 11H14C14.2652 11 14.5196 10.8946 14.7071 10.7071C14.8946 10.5196 15 10.2652 15 10C15 9.73478 14.8946 9.48043 14.7071 9.29289C14.5196 9.10536 14.2652 9 14 9H1C0.734784 9 0.48043 9.10536 0.292893 9.29289C0.105357 9.48043 0 9.73478 0 10C0 10.2652 0.105357 10.5196 0.292893 10.7071C0.48043 10.8946 0.734784 11 1 11Z" fill="#03293D"/>
            <path d="M23 18H1C0.734784 18 0.48043 18.1054 0.292893 18.2929C0.105357 18.4804 0 18.7348 0 19C0 19.2652 0.105357 19.5196 0.292893 19.7071C0.48043 19.8946 0.734784 20 1 20H23C23.2652 20 23.5196 19.8946 23.7071 19.7071C23.8946 19.5196 24 19.2652 24 19C24 18.7348 23.8946 18.4804 23.7071 18.2929C23.5196 18.1054 23.2652 18 23 18Z" fill="#03293D"/>
            </svg>
            </Button>
                    <img src={fcmb_logo} alt="fcmb_logo" width={50} height={40}/> <span style={{fontFamily: "Futura", fontWeight:"bold"}}>FCMB: MOBILE BANKING . . .</span>
                    </Form.Label>
                    <Col sm="5">
                    <InputGroup size="md" >

                        <InputGroup.Prepend>
                        <Button variant=""><FiSearch /></Button>
                        </InputGroup.Prepend>
                        
                        <FormControl placeholder="Search" style={{margin:"0px 4px", borderRight:"none", borderTop:"none", borderBottom:"none"}}/>
                        <Button variant=" ">
                        <svg width="30" height="30" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 10C18 8.4087 17.3679 6.88258 16.2426 5.75736C15.1174 4.63214 13.5913 4 12 4C10.4087 4 8.88258 4.63214 7.75736 5.75736C6.63214 6.88258 6 8.4087 6 10C6 17 3 19 3 19H21C21 19 18 17 18 10Z" stroke="#2D2D2D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M13.73 23C13.5542 23.3031 13.3018 23.5547 12.9982 23.7295C12.6946 23.9044 12.3504 23.9965 12 23.9965C11.6496 23.9965 11.3054 23.9044 11.0018 23.7295C10.6982 23.5547 10.4458 23.3031 10.27 23" stroke="#2D2D2D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <circle cx="19.0869" cy="5.5" r="4.5" fill="#E13071" stroke="#FCFCFC" strokeWidth="2"/>
                        </svg>
                        </Button>
                        <Button variant=" ">
                        <svg width="84" height="31" viewBox="0 0 74 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="74" height="21" rx="5" fill="#4DBD98"/>
                            <rect width="74" height="21" rx="5" fill="#4DBD98"/>
                            <rect width="74" height="21" rx="5" fill="#4DBD98"/>
                            <rect width="74" height="21" rx="5" fill="#4DBD98"/>
                            <path d="M14.5 15.9167C14.5 15.9167 18.8333 13.75 18.8333 10.5V6.70834L14.5 5.08334L10.1667 6.70834V10.5C10.1667 13.75 14.5 15.9167 14.5 15.9167Z" stroke="#FCFCFC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M32.98 14.09C32.2733 14.09 31.6567 13.9433 31.13 13.65C30.61 13.35 30.2067 12.9233 29.92 12.37C29.64 11.8167 29.5 11.17 29.5 10.43C29.5 9.69 29.64 9.04667 29.92 8.5C30.2067 7.95333 30.61 7.53333 31.13 7.24C31.6567 6.94 32.2733 6.79 32.98 6.79C33.6867 6.79 34.3 6.94 34.82 7.24C35.34 7.53333 35.74 7.95333 36.02 8.5C36.3 9.04667 36.44 9.69 36.44 10.43C36.44 11.17 36.3 11.8167 36.02 12.37C35.74 12.9233 35.34 13.35 34.82 13.65C34.3 13.9433 33.6867 14.09 32.98 14.09ZM32.98 12.87C33.58 12.87 34.0467 12.66 34.38 12.24C34.72 11.82 34.89 11.2167 34.89 10.43C34.89 9.64333 34.72 9.04333 34.38 8.63C34.0467 8.21667 33.58 8.01 32.98 8.01C32.38 8.01 31.91 8.21667 31.57 8.63C31.2367 9.04333 31.07 9.64333 31.07 10.43C31.07 11.2233 31.2367 11.83 31.57 12.25C31.91 12.6633 32.38 12.87 32.98 12.87ZM47.8239 6.88L45.2939 14H44.0439L42.3839 9.29L40.7139 14H39.4639L36.9339 6.88H38.5239L40.1639 11.8L41.8839 6.88H42.9739L44.6539 11.87L46.3339 6.88H47.8239ZM54.8937 6.88V14H53.7337L50.1837 9.46V14H48.7237V6.88H49.8737L53.4237 11.41V6.88H54.8937ZM56.3213 6.88H61.2313V8.09H57.8413V9.77H61.0213V10.99H57.8413V12.79H61.2313V14H56.3213V6.88ZM68.3177 14H66.6677L65.7577 11.63C65.6843 11.4433 65.571 11.3133 65.4177 11.24C65.271 11.1667 65.0843 11.13 64.8577 11.13H63.8477V14H62.3077V6.88H65.4777C66.3043 6.88 66.931 7.06 67.3577 7.42C67.7843 7.78 67.9977 8.29667 67.9977 8.97C67.9977 9.44333 67.871 9.85 67.6177 10.19C67.371 10.53 67.0143 10.7733 66.5477 10.92C66.9677 11.0067 67.271 11.2967 67.4577 11.79L68.3177 14ZM65.2477 9.94C65.6943 9.94 66.021 9.86667 66.2277 9.72C66.4343 9.56667 66.5377 9.33 66.5377 9.01C66.5377 8.69 66.4343 8.45667 66.2277 8.31C66.021 8.15667 65.6943 8.08 65.2477 8.08H63.8277V9.94H65.2477Z" fill="#FCFCFC"/>
                            <line opacity="0.15" x1="26.5" y1="6" x2="26.5" y2="16" stroke="#FCFCFC"/>
                            </svg>
                        </Button>
                        <span variant=" " style={{marginRight:"50px"}}>
                        <svg width="40" height="50" viewBox="0 0 25 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <ellipse cx="12.5345" cy="11.0095" rx="8.46888" ry="8.63826" fill="white"/>
                            <path d="M14.5193 12.7697H10.7415L9.96984 14.5665H8.16156L11.8933 6.44651H13.333L17.0647 14.5665H15.291L14.5193 12.7697ZM13.9319 11.4106L12.6304 8.36996L11.3289 11.4106H13.9319Z" fill="#00B394"/>
                            <path d="M22.7086 9.30867C22.5054 8.19077 23.1151 6.80188 22.5731 5.78561C22.0311 4.80322 20.5406 4.53222 19.6937 3.71921C18.8468 2.90619 18.5081 1.41567 17.4918 0.941415C16.4755 0.433282 15.0866 1.11079 13.9687 0.97529C12.8508 0.839788 11.6652 -0.176478 10.5812 0.0267756C9.46329 0.230029 8.75191 1.58505 7.73564 2.12706C6.75325 2.66907 5.22885 2.53356 4.41584 3.34658C3.60283 4.19346 3.83996 5.71786 3.33183 6.70025C2.82369 7.71652 1.53642 8.52953 1.36705 9.64742C1.23154 10.7653 2.28168 11.8832 2.48494 13.0011C2.68819 14.119 2.07843 15.5079 2.62044 16.5242C3.16245 17.5065 4.65297 17.7775 5.49986 18.5906C6.34675 19.4036 6.6855 20.8941 7.70177 21.3684C8.71803 21.8765 10.1069 21.199 11.2248 21.3345C12.3427 21.47 13.5284 22.4862 14.6124 22.283C15.7303 22.0797 16.4417 20.7247 17.4579 20.1827C18.4403 19.6407 19.9647 19.7762 20.7777 18.9632C21.5907 18.1163 21.3536 16.5919 21.8279 15.6095C22.336 14.5933 23.6233 13.7802 23.7926 12.6623C23.962 11.5445 22.9119 10.4266 22.7086 9.30867ZM12.6137 18.5567C8.54866 18.5567 5.22886 15.2369 5.22886 11.1718C5.22886 7.10676 8.54866 3.78696 12.6137 3.78696C16.6788 3.78696 19.9986 7.10676 19.9986 11.1718C19.9647 15.2708 16.6788 18.5567 12.6137 18.5567Z" fill="#00B394"/>
                            <path d="M19.0379 20.928C18.6314 21.0296 18.2249 21.0973 17.9878 21.2328C17.7168 21.3683 17.4458 21.6732 17.107 21.9781C16.5311 22.554 15.7859 23.2654 14.7696 23.4686C14.6002 23.5025 14.4308 23.5025 14.2276 23.5025C13.9566 23.5025 13.6856 23.4686 13.4146 23.4009L16.9376 30.176L19.7832 25.8399L25 26.0093L21.7141 19.6407C21.6802 19.6746 21.6802 19.7084 21.6463 19.7084C20.9011 20.5215 19.8848 20.7247 19.0379 20.928Z" fill="#00B394"/>
                            <path d="M10.8063 22.4863C10.5353 22.4863 10.2304 22.5202 9.89165 22.5879C9.45127 22.6557 9.01089 22.7234 8.57051 22.7234C7.99462 22.7234 7.52036 22.6218 7.07998 22.4185C6.13147 21.9782 5.65721 21.1313 5.21683 20.386C4.9797 20.0134 4.77645 19.6408 4.53932 19.4036C4.33607 19.2342 4.03119 19.0649 3.69243 18.8616L0 25.9755L5.18295 25.7722L8.06237 30.176L11.8903 22.7912C11.5516 22.6557 11.2467 22.5202 11.0095 22.4863C10.9418 22.4863 10.874 22.4863 10.8063 22.4863Z" fill="#00B394"/>
                            </svg>
                        </span>
                    </InputGroup>
                    </Col>
                        <Image src={chioma_pic} width="50px" height="50px" roundedCircle /> 
                    <div>
                        <div>
                        <Form.Label style={{fontWeight:"Bold", width:"120px", height:"2px"}} >{this.state.name}</Form.Label>
                        
                        <Button variant="" className="btn-sm" style={{padding:"2px"}}>
                        <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g opacity="0.3">
                            <path d="M4.44678 5.625L8.19678 9.375L11.9468 5.625" stroke="#2D2D2D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </g>
                            </svg>
                            </Button>
                        </div>
                        <div><Form.Label style={{color:"green", fontSize:"small", fontWeight:"bold"}} >{this.state.email}</Form.Label>
                        </div>
                    </div>
                </Form.Group>
                </Form>
            </div>
            
            </>
         );
    }
}
 
export default Header;