import React from "react";

import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
} from "./ProjectsStyles";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";

const projects = [
  {
    title: "Cricket Guru",
    description:
      "Relive your favorite sport through the best verified cricket bot on Discord. (9K+ users, 4K+ servers, 155K+ games)",
    image: "/images/cg.png",
    tags: ["Python", "Discord", "Game", "Bot"],
    source: "https://top.gg/bot/814100764787081217",
    visit: "https://top.gg/bot/814100764787081217",
    id: 0,
  },
  {
    title: "COVID-19 Simulator",
    description:
      "Simulate the spreading of the coronavirus given different scenarios.",
    image: "/images/covidsim.png",
    tags: ["Lua", "Love2D", "Desktop", "Application"],
    source: "https://devpost.com/software/covid-19-simulator-0ha4vc",
    visit: "https://google.com",
    id: 1,
  },
  {
    title: "GenNet",
    description:
      "Connect with the generations before and after you through family trees.",
    image: "/images/gennet.png",
    tags: ["MongoDB", "React", "Flask", "Django", "Firebase"],
    source: "https://devpost.com/software/gennet",
    visit: "https://github.com/AbdulBaseetShabi/GenNet",
    id: 2,
  },
  {
    title: "Plottr",
    description: "Speech->Text->Drawing CNC Plotter.",
    image: "/images/plottr.png",
    tags: ["Hardware", "RPi 4", "Arduino", "Python"],
    source:
      "https://drive.google.com/file/d/1boitd9ucJnst7DF7zHsaoGAR5GUqgljd/view",
    visit: "https://github.com/truered8/double-m",
    id: 3,
  },
  {
    title: "Portfolio Website",
    description: "Portfolio website - Know all about me",
    image: "/images/website.png",
    tags: ["Javascript", "HTML", "CSS", "React.js", "Next.js"],
    source: "https://google.com",
    visit: "https://google.com",
    id: 4,
  },
  {
    title: "Notes App",
    description: "Web app built with React.js for personal note taking",
    image: "/images/notes.png",
    tags: ["React.js", "Javascript", "HTML", "CSS"],
    source: "https://github.com/divyxnsh/reactjs-notes-app",
    visit: "https://github.com/divyxnsh/reactjs-notes-app",
    id: 5,
  },
];

const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {projects.map((p, i) => {
        return (
          <BlogCard key={i}>
            <Img src={p.image} />
            <TitleContent>
              <HeaderThree title>{p.title}</HeaderThree>
              <Hr />
            </TitleContent>
            <CardInfo className="card-info">{p.description}</CardInfo>
            <div>
              <TagList>
                {p.tags.map((t, i) => {
                  return <Tag key={i}>{t}</Tag>;
                })}
              </TagList>
            </div>
            <UtilityList>
              <ExternalLinks href={p.visit}>Code</ExternalLinks>
              <ExternalLinks href={p.source}>Learn More</ExternalLinks>
            </UtilityList>
          </BlogCard>
        );
      })}
    </GridContainer>
  </Section>
);

export default Projects;
