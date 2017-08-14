import React, { Component } from 'react';

export default class Footer extends Component{
render(){
    return(
            <div id="section-footer" className="footer-wrap">
                <div className="container footer center">
                    <div className="row">
                        <div className="col-lg-12">
                            
                            <div className="social-icons">
                                <ul>
                                    <li><a href="http://www.facebook.com/crystal.milliken"><button type="button" className="btn btn-fb"><i className="fa fa-facebook"></i></button></a></li>
                                    <li><a href="https://www.linkedin.com/in/crystal-milliken-441b1355"><button type="button" className="btn btn-li"><i className="fa fa-linkedin"></i></button></a></li>
                                </ul>
                            </div>
                            <p className="copyright">All rights reserved &copy; 2016</p>
                        </div>
                    </div>
                </div>
	        </div>
    )
}
    
}