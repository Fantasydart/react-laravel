import  Header from "./components/Header";
import React from 'react'
import Navigation from "./router/Navigation";

function App() {
    return (
        <div className="wrapper">
            <Header/>
            <div className="content">
                <div className="container">
                    <Navigation/>
                </div>
            </div>
        </div>
    );
}

export default App;
