import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br />
        Divyansh Bhandari's Portfolio
      </SectionTitle>
      <SectionText>
        First-Year Software Engineering Student at University of Waterloo
      </SectionText>
      <Button
        onClick={() =>
          (window.location =
            "https://uwaterloo.ca/future-students/programs/software-engineering")
        }
      >
        SE @UWaterloo
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
