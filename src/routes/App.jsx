import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Layout from "../components/Layout";
import Home from "../containers/Home";
import CrearMedicion from '../containers/CrearMedicion';
import Pieza from '../containers/Pieza';
import Medicion from '../containers/Medicion';

const App = () => (
    <BrowserRouter>
        <Layout>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/pieza" component={Pieza} />
                <Route exact path="/medicion/edit/:id" component={CrearMedicion} />
                <Route exact path="/medicion/create" component={CrearMedicion} />
                <Route exact path="/medicion/:id" component={Medicion} />
            </Switch>
        </Layout>
    </BrowserRouter>
);

export default App;