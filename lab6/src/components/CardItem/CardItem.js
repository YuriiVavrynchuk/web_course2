import React from "react";
import { Card, Button } from "antd";
import { Body, Footer } from "./CardItem.styled";

const { Meta } = Card;

const CardItem = ({ id, brand = 'None', model, imageSrc, power, price }) => (
    <Card
        hoverable
        style={{ width: 350, borderRadius: "20px" }}
        cover={
            <img style={{ borderRadius: "20px", borderTop: "1px solid grey",borderBottom: "1px solid grey" }} alt={brand} src={imageSrc} />
        }
    >
        <Meta title={brand} style={{ textAlign: "center" }} />
        <Body>
            <p>Model: {model}</p>
            <p>Power: {power}</p>
            <p>Price: {price}</p>
        </Body>
        <Footer>
            <Button>Show More</Button>
        </Footer>
    </Card>
);

export default CardItem;