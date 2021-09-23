import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Layout from "../components/Layout";
import Home from "../containers/Home";
import Sensor from '../containers/Sensor';
import CreateSensor from '../containers/CreateSensor';

import Maquina from '../containers/Maquina';
import Pieza from '../containers/Pieza';

const App = () => (
    <BrowserRouter>
        <Layout>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/sensor" component={Sensor} />
                <Route exact path="/sensor/edit/:id" component={CreateSensor} />
                <Route exact path="/sensor/create" component={CreateSensor} />

                <Route exact path="/maquina" component={Maquina} />
                <Route exact path="/pieza/:id" component={Pieza} />

            </Switch>
        </Layout>
    </BrowserRouter>
);

export default App;