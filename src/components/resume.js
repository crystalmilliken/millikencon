import React, { Component } from 'react';
import {Button} from 'react-bootstrap';

export default class Resume extends Component {

    
    render(){
        return (
            <div style={{backgroundColor:"#333333"}}>
            <div>
             
            <div className="col-md-12">
                
                <div className="container"></div>
                <div className="videoWrapper" style={{minHeight:"106em"}} >
                      
               
                <iframe  src={"https://docs.google.com/document/d/13Gp8S00ALPEMmoVP2bgZ3eGFBNJC0tD8XJGYALkFxk8/pub?embedded=true"} style={{minHeight:"100em", marginTop:"5em"}} title="Resume" frameBorder="0" allowFullScreen 
                className="video"></iframe>
                
                </div>
               
                </div>
            </div>
             <div className="container" style={{textAlign:"center", marginTop:"0"}}>
                <Button href="https://docs.google.com/document/d/13Gp8S00ALPEMmoVP2bgZ3eGFBNJC0tD8XJGYALkFxk8/edit?usp=sharing">Download</Button>
                </div>
            </div>
        )
    }
}