import React, { Component } from 'react';
import '../style.css';

import Profile from '../images/profile.png'

export default class About extends Component {

    
    render(){
        return (<div>
            <div id="section-home" className="home-section-wrap center">
			<div className="section-overlay" style={{minHeight:"650px"}}></div>
			<div className="container home" style={{minHeight:"650px"}} >
				<div className="row">
					<h1 className="well-come " style={{marginTop:"2em"}}>
                        <img src={Profile} alt="Crystal Milliken"/> </h1>
					<div className="col-md-8 col-md-offset-2" style={{color:"white"}}> 
							Thanks for visiting my site. Here you will find my most recent resume and portfolio. The tech 
                            tutorials that I have available were created in an effort to help my kids through some of the 
                            projects that they were working on. I have 8 awesome kids that love technology and it's a blessing
                            to me to be able to help them when I can. Feel free to contact me through Facebook or LinkedIn. 
                            Those links can be found at the bottom of my site. 
                    

						<div className="customBar"></div>
					</div>
				</div>
			</div>
		</div>
               
            </div>
        )
    }
}