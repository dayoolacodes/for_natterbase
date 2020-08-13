import React, { Component } from 'react';
import { Button} from "react-bootstrap"


class MenuButton extends Component {
    state = {  }


    render() { 
        return ( 
            <>
            
            <Button variant="light" className="btn-light shadow" 
            style={{color:"#23B3E8",padding: "2px", width: "200px", textAlign: "center", margin:"12px"}}>
                +
            </Button>
            

            </>
         );
    }
}
 
export default MenuButton;