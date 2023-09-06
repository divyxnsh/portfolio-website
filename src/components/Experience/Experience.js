import React from "react";
import {
  BlogCard,
  CardInfo,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
} from "./ExperienceStyles";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";

const experience = [
  {
    title: "Data Science Intern @PiinPoint",
    description:
      "Expected to complete a 16-week internship in a hybrid role with the Data Science and Software Development teams at PiinPoint.",
    date: "Sep 2023 - Dec 2023*",
    tags: ["Python", "Pandas", "NumPy", "Matplotlib"],
  },
  {
    title: "Full-Stack Dev Intern @PiinPoint",
    description:
      "Spearheaded the migration of codebase from Pandas to Polars, resulting in a 100x speed improvement. Built several features into production.",
    date: "Jan 2023 - Apr 2023",
    tags: ["Python", "React", "Reflux", "MongoDB", "Pandas"],
  },
  {
    title: "Software Engineer @PostGrid",
    description:
      "Built new REST APIs and backend features using TypeScript & MERN. Developed an order scheduling dashboard using React, deployed to 1000+ users.",
    date: "May 2022 - Aug 2022",
    tags: ["Typescript", "React", "MongoDB", "AWS", "Express"],
  },
];

const Experience = () => (
  <Section nopadding id="experience">
    <SectionDivider />
    <SectionTitle main>Experience</SectionTitle>
    <GridContainer>
      {experience.map((exp, i) => {
        return (
          <BlogCard key={i}>
            <TitleContent>
              <HeaderThree
                title
                style={{
                  alignItems: "center",
                  marginTop: 18,
                }}
              >
                {exp.title}
              </HeaderThree>
              <HeaderThree
                style={{
                  color: "white",
                  alignItems: "center",
                  marginTop: 18,
                }}
              >
                {exp.date}
              </HeaderThree>
              <Hr />
            </TitleContent>
            <CardInfo className="card-info">{exp.description}</CardInfo>
            <div>
              <TagList>
                {exp.tags.map((tag, j) => {
                  return <Tag key={j}>{tag}</Tag>;
                })}
              </TagList>
            </div>
          </BlogCard>
        );
      })}
    </GridContainer>
  </Section>
);

export default Experience;
