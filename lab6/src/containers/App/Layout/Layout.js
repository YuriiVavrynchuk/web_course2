import React from "react";
import { StyledHeader, IconsWrapper } from "./Layout.styles";
import {
    TwitterOutlined,
    SearchOutlined,
    ShoppingCartOutlined,
    InstagramOutlined,
    FacebookOutlined,
} from "@ant-design/icons";

const Layout = () => (
    <StyledHeader title="Stadion">
        <div>
            <p>Printers store</p>
        </div>
        <div>
        <IconsWrapper>
            <TwitterOutlined />

            <FacebookOutlined />

            <InstagramOutlined />
        </IconsWrapper>
        </div>
        <div>
        <IconsWrapper>
            <SearchOutlined />

            <ShoppingCartOutlined />
        </IconsWrapper>
        </div>
    </StyledHeader>
);

export default Layout;