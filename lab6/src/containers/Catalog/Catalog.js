import React from "react";
import CardItem from "../../components/CardItem/CardItem";
import {
    CardWrapper,
} from "./Catalog.styled";
import FilterBar from "../FilterBar/FilterBar";
import Printer from "../../Icons/printer.jpg"


const data = [
    {
        id: 1,
        brand: "HP",
        model: "D834D",
        image: Printer,
        power: 100,
        price: 10000,
    },
    {
        id: 2,
        brand: "Apple",
        model: "F4343D",
        image: Printer,
        power: 100,
        price: 5000,
    },
    {
        id: 3,
        brand: "Samsung",
        model: "L3342D",
        image: Printer,
        power: 200,
        price: 11000,
    }
];

const Catalog = () =>{
    return (
        <div>
            <FilterBar />
            <CardWrapper>
                {data.map(({brand, model, image, power, price, id}, idx) => (
                    <CardItem
                        brand={brand}
                        model={model}
                        imageSrc={image}
                        power={power}
                        price={price}
                        key={id}
                    />
                ))}
            </CardWrapper>
        </div>
    );
}

export default Catalog;