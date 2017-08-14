import React, { Component } from 'react';
import AyurvedaScreen from '../images/ayurvedaScreen.png';
import Healthier from '../images/healthierfun.png';
import Diverse from '../images/diversefit.png';
import Herald5 from '../images/herald5.png';

export default class Portfolio extends Component {

    
    render(){
        return (
            <div>
                <section id="section-feature" className="feature-wrap">
		            <div className="container features center">
				        <div className="col-lg-12">
					        <div className="col-md-12 center section-title">
					            <h3 style={{color:"black"}}>Work Examples</h3>
                                
                            </div>
                            <div className="col-md-12" >
                            <h4 style={{color:"black"}}><a href="https://github.com/crystalmilliken" className="resourceText">Github Account
                            </a></h4><span style={{color:"red"}}>***</span>Project on Github
                            </div>
                            <div className="col-md-6" style={{backgroundColor: "white"}}>
                                <h4 style={{color:"black"}}><span style={{color:"red"}}>***</span>Ayurveda Project</h4>
                                <a href="https://ayurvedaproject-ff552.firebaseapp.com/">
                                <img src={AyurvedaScreen} style={{maxHeight:"400px", maxWidth: "400px", padding:'1em'}} alt="ayurveda" />
                                </a>
                                <hr/>
                            </div>
                            <div className="col-md-6" style={{paddingLeft:'2em', backgroundColor: "white"}}>
                                <h4 style={{color:"black"}}>Healthier Fundraiser</h4>
                                <a href="https://healthierfundraiser.com">
                                <img src={Healthier} style={{maxHeight:"400px", maxWidth: "400px", padding:'1em'}} alt="healtherfundraiser" />
                                </a>
                                <hr/>
                            </div>
                            <div className="col-md-6" style={{backgroundColor: "white"}}>
                                <h4 style={{color:"black"}}>DiverseFit</h4>
                                <a href="https://www.diversefit.net/">
                                <img src={Diverse} style={{maxHeight:"400px", maxWidth: "400px", padding :'1em'}} alt="diversefit"/>
                                </a>
                            </div>
                            <div className="col-md-6" style={{backgroundColor: "white"}}>
                                <h4 style={{color:"black"}}>HERALD5</h4>
                                <a href="http://herald5.com/index.aspx">
                                <img src={Herald5} style={{maxHeight:"400px", maxWidth: "400px", padding:'1em'}} alt="herald5"/>
                                </a>
                            </div>
                        </div>
					    <hr/>
					    
                    </div>  
                </section>
            </div>
        )
    }
}