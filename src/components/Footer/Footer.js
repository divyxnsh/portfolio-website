import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { FaEnvelope } from "react-icons/fa";
import { SocialIcons } from "../Header/HeaderStyles";
import {
  FooterWrapper,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
  return (
    <FooterWrapper>
      <SocialIconsContainer>
        <Slogan>Being the best version of myself!</Slogan>
        <SocialContainer>
          <SocialIcons href="https://github.com/divyxnsh">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://linkedin.com/in/divyanshb">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons href="mailto:divyxnsh@gmail.com">
            <FaEnvelope size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
