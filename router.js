import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Home from "./home"
import Mobile from "./mob"
import Car from "./car"
import Tablet from "./tablet"
import Furniture from './furniture';
import Curtains from './curtains';
import Login from "./login"
import Form from "./form"
import Mainform from "./mainform"
import slide1 from "./slide1"
import slide2 from "./slide2"
import slide3 from "./slide3"
import slide4 from "./slide4"
import slide5 from "./slide5"
import slide6 from "./slide6"

class AppRouter extends React.Component{
    render(){
        return(
            <Router>
                <Route exact path = "/" component={Home} />
                <Route exact path = "/mobile" component={Mobile} />
                <Route exact path = "/car" component={Car} />
                <Route exact path = "/tablet" component={Tablet} />
                <Route exact path = "/furniture" component={Furniture} />
                <Route exact path = "/curtains" component={Curtains} />
                <Route exact path = "/login" component={Login} />
                <Route exact path = "/form" component={Form} />
                <Route exact path = "/mainform" component={Mainform} />
                <Route exact path = "/slide1" component={slide1} />
                <Route exact path = "/slide2" component={slide2} />
                <Route exact path = "/slide3" component={slide3} />
                <Route exact path = "/slide4" component={slide4} />
                <Route exact path = "/slide5" component={slide5} />
                <Route exact path = "/slide6" component={slide6} />

            </Router>
        )
    }
}

export default AppRouter;