import React from "react";
import { SiCplusplus, SiLua } from "react-icons/si";
import {
  DiMysql,
  DiReact,
  DiPython,
  DiJavascript1,
  DiHtml5,
  DiCss3,
  DiMongodb,
} from "react-icons/di";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./SkillsStyles";

const Skills = () => (
  <Section id="skills">
    <SectionDivider divider />
    <SectionTitle>Skills</SectionTitle>
    <List>
      <ListItem>
        <picture>
          <DiJavascript1 size="4rem" />
          <DiPython size="4rem" />
          <SiLua size="4rem" />
          <SiCplusplus size="4rem" />
        </picture>
        <ListContainer>
          <ListTitle>Languages</ListTitle>
          <ListParagraph>
            <ul>
              <li>&#8226; Python</li>
              <li>&#8226; C / C++</li>
              <li>&#8226; Javascript</li>
              <li>&#8226; MATLAB</li>
              <li>&#8226; Lua</li>
            </ul>
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiReact size="4rem" />
          <DiHtml5 size="4rem" />
          <DiCss3 size="4rem" />
        </picture>
        <ListContainer>
          <ListTitle>Technologies</ListTitle>
          <ListParagraph>
            <ul>
              <li>&#8226; React.js</li>
              <li>&#8226; HTML5</li>
              <li>&#8226; CSS3</li>
              <li>&#8226; Linux</li>
              <li>&#8226; MS Azure</li>
              <li>&#8226; Git</li>
            </ul>
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiMysql size="4rem" />
          <DiMongodb size="4rem" />
        </picture>
        <ListContainer>
          <ListTitle>Databases</ListTitle>
          <ListParagraph>
            <ul>
              <li>&#8226; MySQL</li>
              <li>&#8226; MongoDB</li>
            </ul>
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Skills;
