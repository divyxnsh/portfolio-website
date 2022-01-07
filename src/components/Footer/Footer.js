import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

import { SocialIcons } from "../Header/HeaderStyles";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:226-507-2986">226-507-2986</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:divyxnsh@gmail.com">
            divyxnsh@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Being the best version of myself!</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/divyxnsh">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://linkedin.com/in/divyanshb">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://instagram.com/divyxnsh">
            <AiFillInstagram size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
