import Header from "./components/Header";
import Categories from "./components/Categories";
import Sort from "./components/Sort";
import PizzaList from "./components/PizzaList";
import {useState} from "react";
import pizzas from './pizzas'
import React from 'react'


function App() {
    const [pizza, setPizza] = useState(pizzas)
    return (
        <div className="wrapper">
            <Header/>
            <div className="content">
                <div className="container">
                    <div className="content__top">
                        <Categories/>
                        <Sort/>
                    </div>
                    <h2 className="content__title">Все пиццы</h2>
                    <PizzaList items={pizza} />
                </div>
            </div>
        </div>
    );
}

export default App;
