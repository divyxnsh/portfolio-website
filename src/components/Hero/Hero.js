import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <LeftSection>
    <SectionTitle main center>
      Hey there 👋🏻 <br />
      My name is Divyansh Bhandari
    </SectionTitle>
    <SectionText>
      I'm a 3A Software Engineering Student at University of Waterloo
    </SectionText>
  </LeftSection>
);

export default Hero;
