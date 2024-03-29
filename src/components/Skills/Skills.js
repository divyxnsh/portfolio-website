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
  DiGit,
  DiLinux,
  DiAws,
  DiDocker,
  DiHeroku,
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
          <DiJavascript1 size="2rem" />
          <DiPython size="2rem" />
          <SiLua size="2rem" />
          <SiCplusplus size="2rem" />
          <DiHtml5 size="2rem" />
          <DiCss3 size="2rem" />
        </picture>
        <ListContainer>
          <ListTitle>Languages</ListTitle>
          <ListParagraph>
            <ul>
              <li>&#8226; Python</li>
              <li>&#8226; Typescript</li>
              <li>&#8226; Javascript</li>
              <li>&#8226; C / C++</li>
              <li>&#8226; MATLAB</li>
              <li>&#8226; Lua</li>
              <li>&#8226; HTML5</li>
              <li>&#8226; CSS3</li>
            </ul>
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
          <DiMysql size="3rem" />
          <DiMongodb size="3rem" />
          <DiGit size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Technologies</ListTitle>
          <ListParagraph>
            <ul>
              <li>&#8226; Pandas</li>
              <li>&#8226; MongoDB</li>
              <li>&#8226; React</li>
              <li>&#8226; Express</li>
              <li>&#8226; Node</li>
              <li>&#8226; Reflux</li>
              <li>&#8226; MySQL</li>
            </ul>
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiLinux size="3rem" />
          <DiAws size="3rem" />
          <DiDocker size="3rem" />
          <DiHeroku size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Tools</ListTitle>
          <ListParagraph>
            <ul>
              <li>&#8226; Jupyter</li>
              <li>&#8226; Postman</li>
              <li>&#8226; Linux</li>
              <li>&#8226; Docker</li>
              <li>&#8226; AWS</li>
              <li>&#8226; Azure</li>
              <li>&#8226; Firebase</li>
              <li>&#8226; Git</li>
            </ul>
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Skills;
