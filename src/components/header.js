import React,{Component} from 'react';
import {
    BrowserRouter,
    Link,
    Route,
    Switch
} from 'react-router-dom';
import India from './india';
import Countries from './countries';
import Home from './home';

class Header extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <>
                <BrowserRouter>
                <div className="container-fluid header">
                    <div className="row">
                        <div className="col-lg-2">
                            <h1><Link className="header-link" to="/">Covid-19</Link></h1>
                        </div>
                        <div className="col-lg-1">
                            <Link className="header-link menu" to="countries">Countries</Link>
                        </div>
                        <div className="col-lg-1">
                            <Link className="header-link menu" to="india">India</Link>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <Switch>
                        <Route exact path="/">
                            <Home/>
                        </Route>
                        <Route path="/countries">
                            <Countries/>
                        </Route>
                        <Route path="/india">
                            <India/>
                        </Route>
                    </Switch>
                    </div>
                </BrowserRouter>
            </>
        );
    }
}
export default Header;