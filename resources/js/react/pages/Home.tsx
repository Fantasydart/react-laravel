import React, {useEffect, useState} from 'react';
import Sort from "../components/Sort";
import PizzaList from "../components/PizzaList";
import Categories from "../components/Categories";
import {iPizza} from "../shared/types";
import pizzaServices from "../api/pizza.services";

const Home = () => {

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
        <>
                <div className="content__top">
                    <Categories/>
                    <Sort/>
                </div>
                <h2 className="content__title">Все пиццы</h2>
                <PizzaList items={pizza} isLoading={isLoadingPizza}/>
        </>
    );
};

export default Home;
