import React from "react";

import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from "./AcomplishmentsStyles";

const data = [
  { number: "SE 101", text: "Introduction to Software Engineering" },
  { number: "CS 137", text: "Programming Principles" },
  { number: "MATH 115", text: "Linear Algebra for Engineering" },
  { number: "MATH 135", text: "Algebra for Honours Mathematics" },
  { number: "MATH 117", text: "Calculus I for Engineering" },
  { number: "ECE 105", text: "Classical Mechanics" },
  { number: "CS 138", text: "Intro to Data Abstraction and Implementation" },
  { number: "ECE 140", text: "Linear Circuits" },
  { number: "ECE 124", text: "Digital Circuits and Systems" },
  { number: "MATH 119", text: "Calculus II for Engineering" },
  { number: "ECE 106", text: "Electricity and Magnetism" },
  { number: "CHE 102", text: "Chemistry for Engineers" },
  { number: "SE 201", text: "Seminar" },
  { number: "SE 212", text: "Logic & Computation" },
  { number: "STAT 206", text: "Statistics" },
  { number: "CS 241", text: "Sequential Programs" },
  { number: "ENGL 109", text: "Academic Writing" },
  { number: "ECE 222", text: "Digital Computers" },
  { number: "MATH 239", text: "Intro to Combinatorics" },
  { number: "CS 348", text: "Intro to Database Management" },
  { number: "CS 247", text: "Software Engineering Principles" },
  { number: "CS 240", text: "Data Structures & Data Management" },
  { number: "CLAS 104", text: "Classical Mythology" },
  { number: "ECE 192", text: "Engineering Economics & Society Impact" },
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>University Courses</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{`${card.number}`}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
    <SectionDivider />
  </Section>
);

export default Acomplishments;
