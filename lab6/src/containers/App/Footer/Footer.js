import React from "react";
import Stadion from "../../../Icons/printer.jpg";
import { Wrapper, IconsWrapper, VerticalLine, LogoWrapper, StyledText, IconBase } from "./Footer.styled";
import {
    TwitterOutlined,
    InstagramOutlined,
    LinkedinOutlined,
    YoutubeOutlined,
    } from "@ant-design/icons";

    const Footer = () => {
    return (
        <Wrapper>
        <LogoWrapper>
            <h1>Printers</h1>
        </LogoWrapper>
        <p>Stadions are interesting <br />Every match is specially.</p>
        <VerticalLine />
        <IconsWrapper>
            <IconBase component={YoutubeOutlined} color='#FF0000'/>
            <IconBase component={TwitterOutlined} color='#03A9F4' />
            <IconBase component={LinkedinOutlined} color='#007AB9'/>
            <IconBase component={InstagramOutlined} color='#3A9F4'/>
        </IconsWrapper>
        <VerticalLine />
        <StyledText>© Stadion all rights reserved</StyledText>
        </Wrapper>
    );
};

export default Footer;