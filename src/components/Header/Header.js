import Link from "next/link";
import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { FaEnvelope } from "react-icons/fa";

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  Span,
} from "./HeaderStyles";

const Header = () => (
  <Container>
    <Div1>
      <Link href="/">
        <a
          style={{
            display: "flex",
            alignItems: "center",
            color: "white",
            marginBottom: 18,
            marginLeft: 30,
          }}
        >
          <Span>&lt;div&gt;</Span>
        </a>
      </Link>
    </Div1>
    <Div2
      style={{
        display: "flex",
        alignItems: "center",
        color: "white",
        marginBottom: 18,
      }}
    >
      <li>
        <Link href="#experience">
          <NavLink>Experience</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#skills">
          <NavLink>Skills</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#courses">
          <NavLink>Courses</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3
      style={{
        alignItems: "center",
        color: "white",
        marginBottom: 18,
        marginRight: 30,
      }}
    >
      <SocialIcons href="https://github.com/divyxnsh">
        <AiFillGithub size="5rem" />
      </SocialIcons>
      <SocialIcons href="https://linkedin.com/in/divyanshb/">
        <AiFillLinkedin size="5rem" />
      </SocialIcons>
      <SocialIcons href="mailto:divyxnsh@gmail.com">
        <FaEnvelope size="5rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
