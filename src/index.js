import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import './index.css';
import  Header from './components/header.js';
import Home from './components/home.js'
import Resume from './components/resume';
import Footer from './components/footer';
import About from './components/about';
import Portfolio from './components/portfolio';
import Favorites from './components/favorites';
import registerServiceWorker from './registerServiceWorker';


export default class Main extends Component {
    render(){
        return(
            <BrowserRouter>
            <div>
                <Header />
                <Switch>
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/Resume" component={Resume} />
                    <Route exact path="/Portfolio" component={Portfolio} />
                    <Route exact path="/techTutorials" component={Home} />
                    <Route exact path="/favorites" component={Favorites} />
                     <Route exact path="/" component={Home} />
                </Switch>
                <Footer />
            </div>
            </BrowserRouter>
        )
    }
}



ReactDOM.render(<Main />, document.getElementById('root'));
registerServiceWorker();
