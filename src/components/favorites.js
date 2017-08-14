import React, { Component } from 'react';

export default class Favorites extends Component {

       
    changestyles ={
              color:"black",
              
            }
 

    render(){
            return (
           	<section id="section-feature" className="feature-wrap">
		<div className="container features center">
			<div className="row">
				<div className="col-lg-12">
					<div className="col-md-10 col-md-offset-1 center section-title">
					<h3 style={{color:"black"}}>Tech Resources</h3>
					
				<ul style={{textAlign:"Left"}} >

					<ol><a href="https://teamtreehouse.com" className = "resourceText">Tree House: </a>Learn Web Design, Coding & Much More</ol>
						<ol><a href="http://getbootstrap.com" className = "resourceText">Bootstrap:</a> One of the most popular HTML, CSS, and JS framework for developing responsive, mobile first projects on the web.</ol>
					<ol><a href="https://firebase.google.com" className = "resourceText">Firebase:</a> Hosting, Database, Storage at VERY low cost(free plan available)</ol>
					<ol><a href="https://azure.microsoft.com/en-us/overview/what-is-azure/" className = "resourceText">Azure:</a> Microsoft's integrated cloud services that developers and IT professionals use to build, deploy, and manage applications</ol>
					<ol></ol>
				</ul>
					
				</div>
</div>
</div>
</div>
</section>
        )
    }
}