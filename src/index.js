import React from "react";
import ReactDOM from "react-dom";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

import Login from "./components/Login";
import MapView from "./components/MapView";
import Tank from "./components/Tank";

export default function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Login/>}/>
                <Route path="/mapview" element={<MapView/>}/>
                <Route path="/tank" element={<Tank />}/>
            </Routes>
        </Router>
    )
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
