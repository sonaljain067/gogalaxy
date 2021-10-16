import React from "react";
import { BrowserRouter as Router , Switch, Route } from "react-router-dom";
import Details from "./Details";
// import DataTable from "./DataTable";
import Navbar from "./Navbar";
import Launches from "./Launches";

function Routes(id){
    // render() {
        return (
            <Router>
                <Navbar />
                <Switch>
                <Route path='/' exact component={Launches} />
                <Route path='/:id' exact component={Details} />
                </Switch>
            </Router>
        )
    // }
}
export default Routes;