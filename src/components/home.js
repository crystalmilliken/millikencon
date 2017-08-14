import React, { Component } from 'react';
import '../style.css';
import {Button} from 'react-bootstrap';


export default class Home extends Component {

    
    render(){
        return (
            <div>
                {/*Welcome begin*/}
            <div id="section-home" className="home-section-wrap center">
			<div className="section-overlay" style={{minHeight:"550px", maxHeight:"550px"}}></div>
			<div className="container home" style={{minHeight:"550px"}} >
				<div className="row">
					<h1 className="well-come">Milliken Consulting</h1>

					<div className="col-md-8 col-md-offset-2">

						<div className="home-buttons">
							<Button href="/portfolio" className="btn">
								Portfolio
								<span className="icon">
									<i className="glyphicon glyphicon-list-alt"></i>
								</span>
							</Button>

						</div>
					</div>
				</div>
			</div>
		</div>
		<section id = "section-services" className="services-wrap">
		    <div className="container services" id="resources">
                <div className="row">
				    <div className="col-md-12  center section-title">
					    <h3>Resources</h3>
				    </div>
                    
                    <div className="col-md-6 col-sm-6 service " >
                        <span className="service-icon center"><i className="glyphicon glyphicon-list-alt"></i></span>
                        <div className="service-desc">
                            <h4 className="service-title color-scheme" style={{marginBottom:"5px"}}><a href="/Resume">Resume</a></h4>
                            <p className="service-description justify" >
                                Professional Work History
                            </p>
                        </div>
                     </div>
	                <div className="col-md-6 col-sm-6 service " >
					    <span className="service-icon center"><i className="glyphicon glyphicon-th"></i></span>
					    <div className="service-desc">
						    <h4 className="service-title color-scheme" style={{marginBottom:"5px"}}><a href="/portfolio">Portfolio</a></h4>
						    <p className="service-description justify" >
							 Examples of my work
						     </p>
					     </div>
				     </div>
                      <div className="col-md-6 col-sm-6 service " >
					    <span className="service-icon center"><i className="glyphicon glyphicon-pencil"></i></span>
					    <div className="service-desc">
						    <h4 className="service-title color-scheme" style={{marginBottom:"5px"}}><a href="https://drive.google.com/drive/folders/0BwrfEU_bYkN_eG9aOHRhc3pCYTg?usp=sharing">Tech Tutorials</a></h4>
						    <p className="service-description justify" >
							 Check out my tech tutorials
						     </p>
					     </div>
				     </div>
                      <div className="col-md-6 col-sm-6 service " >
					    <span className="service-icon center"><i className="glyphicon glyphicon-star-empty"></i></span>
					    <div className="service-desc">
						    <h4 className="service-title color-scheme" style={{marginBottom:"5px"}}><a href="/favorites">Technical Resources</a></h4>
						    <p className="service-description justify" >
							 Technical Resources
						     </p>
					     </div>
				     </div>
			    </div>
		     </div>
	    </section>


            </div>
        )
    }
}