import React, { useRef, useEffect } from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";

const About = () => {
  const carouselRef = useRef();

  // snap back to beginning of scroll when window is resized
  // avoids a bug where content is covered up if coming from smaller screen
  useEffect(() => {
    const handleResize = () => {
      scroll(carouselRef.current, 0);
    };

    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <Section id="about">
      <SectionTitle>About Me</SectionTitle>
      <SectionText>
        Primarily a Tech-Enthusiast and a massive sports (majorly cricket)
        freak. An aspiring Software Engineer always striving to be the best
        version of myself while innovating amazing software applications.
      </SectionText>
    </Section>
  );
};

export default About;
