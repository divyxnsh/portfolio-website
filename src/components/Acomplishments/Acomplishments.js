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
  { number: "SE 102", text: "Seminar" },
  { number: "CS 138", text: "Intro to Data Abstraction and Implementation" },
  { number: "ECE 140", text: "Linear Circuits" },
  { number: "ECE 124", text: "Digital Circuits and Systems" },
  { number: "MATH 119", text: "Calculus II for Engineering" },
  { number: "ECE 106", text: "Electricity and Magnetism" },
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
