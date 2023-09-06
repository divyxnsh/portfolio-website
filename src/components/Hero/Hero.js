import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { LeftSection, ProfileImageContainer, Img, Emoji } from "./HeroStyles";

const Hero = (props) => (
  <Section>
    <div style={{ display: "flex", alignItems: "center" }}>
      <SectionTitle center>
        Hey there!
        <br />
        My name is Divyansh Bhandari
      </SectionTitle>
      <Emoji>👋</Emoji>
      <ProfileImageContainer>
        <Img src="/images/cute.jpeg" />
      </ProfileImageContainer>
    </div>
    <LeftSection>
      <SectionText>
        I'm a 3A Software Engineering Student at the University of Waterloo, a
        tech-enthusiast and a massive sports freak
      </SectionText>
    </LeftSection>
  </Section>
);

export default Hero;
