import React, { Component } from 'react';
import {Button } from 'react-bootstrap';

class SideButton extends Component {
    state = {  }
    render() { 
        return ( 
            <>
             <Button variant="" className="" style={{zIndex:"20"}}>
            <svg width="101" height="101" viewBox="0 0 101 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g filter="url(#filter0_d)">
                      <circle cx="50.5" cy="47.5" r="40.5" fill="#23B3E8"/>
                      </g>
                      <g clip-path="url(#clip0)">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M63.8648 48.715H51.7148V60.865C51.7148 61.5357 51.1705 62.08 50.4998 62.08C49.8291 62.08 49.2848 61.5357 49.2848 60.865V48.715H37.1348C36.4641 48.715 35.9198 48.1707 35.9198 47.5C35.9198 46.8293 36.4641 46.285 37.1348 46.285H49.2848V34.135C49.2848 33.4643 49.8291 32.92 50.4998 32.92C51.1705 32.92 51.7148 33.4643 51.7148 34.135V46.285H63.8648C64.5355 46.285 65.0798 46.8293 65.0798 47.5C65.0798 48.1707 64.5355 48.715 63.8648 48.715Z" fill="white"/>
                      </g>
                      <defs>
                      <filter id="filter0_d" x="0" y="0" width="101" height="101" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                      <feOffset dy="3"/>
                      <feGaussianBlur stdDeviation="5"/>
                      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"/>
                      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                      </filter>
                      <clipPath id="clip0">
                      <rect width="29.16" height="29.16" fill="white" transform="translate(35.9198 32.92)"/>
                      </clipPath>
                      </defs>
                      </svg>

                        </Button>
            </>
         );
    }
}
 
export default SideButton;