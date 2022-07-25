import React from 'react';
import PizzaItem from "./PizzaBlock";
import PizzaSkeleton from './PizzaBlock/PizzaSkeleton'
import {iPizza} from '../shared/types'

type listProps = {
    items: iPizza[],
    isLoading: boolean
}

const PizzaList = ({items, isLoading}:listProps) => {

    return (
        <div className="content__items">
            {
                isLoading
                    ? [...new Array(6)].map((_, index)=><PizzaSkeleton key={index}/>)
                    : items.map(pizza=><PizzaItem key={pizza.id} {...pizza}/>)
            }
        </div>
    );
};

export default PizzaList;
