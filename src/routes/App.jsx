import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Layout from "../components/Layout";
import Home from "../containers/Home";
import Sensor from '../containers/Sensor';
import CreateSensor from '../containers/CreateSensor';

const App = () => (
    <BrowserRouter>
        <Layout>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/sensor" component={Sensor} />
                <Route exact path="/sensor/edit/:id" component={CreateSensor} />
                <Route exact path="/sensor/create" component={CreateSensor} />
            </Switch>
        </Layout>
    </BrowserRouter>
);

export default App;