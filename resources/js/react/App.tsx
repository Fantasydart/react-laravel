import Header from "./components/Header";
import Categories from "./components/Categories";
import Sort from "./components/Sort";
import PizzaList from "./components/PizzaList";
import {useEffect, useState} from "react";
import React from 'react'
import pizzaServices from './api/pizza.services'
import {iPizza} from "./shared/types";

function App() {
    const [pizza, setPizza] = useState<iPizza[]>([])
    const [isLoadingPizza, setIsLoadingPizza] = useState<boolean>(true)

    useEffect(()=>{
        const response = pizzaServices.getPizzas()
        response.then((value)=>{
            setPizza(value)
            setIsLoadingPizza(false)
        })
    },[])


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
                    <PizzaList items={pizza} isLoading={isLoadingPizza}/>
                </div>
            </div>
        </div>
    );
}

export default App;
