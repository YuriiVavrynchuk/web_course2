import React from "react";
import Printer from "../../Icons/printer.jpg";
import PrinterMain from "../../Icons/printerMain.jpeg"
import {
    SectionWrapper,
    StyledText,
    CardWrapper,
    } from "./Home.styled";
    import CardItem from "../../components/CardItem/CardItem";

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
},
];

const Home = () => {
    return (
        <div>
        <SectionWrapper> 
            <img alt="Intro" src={PrinterMain}/>
            <StyledText>
            <h1>Bring your best shoots into a paper reality</h1>
            </StyledText>
        </SectionWrapper>
        <CardWrapper>
                {data.map(({ id, brand, model, image, power, price}) => (
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
};

export default Home;