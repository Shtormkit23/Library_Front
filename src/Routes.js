import React from 'react';
import {Route, Switch} from "react-router-dom";
import Books from "./containers/Books/Books";
import FullBookInfo from "./containers/FullBookInfo/FoolBookInfo";

const Routes = () => {
        return (
            <Switch>
                <Route path="/" exact component={Books} />
                <Route path="/book/:id" exact component={FullBookInfo}/>
            </Switch>
        );
}

export default Routes;