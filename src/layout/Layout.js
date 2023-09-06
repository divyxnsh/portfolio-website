import React from "react";
import BgAnimation from "../components/BackgroundAnimation/BackgroundAnimation";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import { Container } from "./LayoutStyles";

export const Layout = ({ children }) => {
  return (
    <Container>
      <Header />
      <div
        style={{
          /* Define styles for the background animation */
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex:
            -1 /* Set a lower z-index to position the background behind other components */,
        }}
      >
        <BgAnimation />
      </div>
      <main>{children}</main>
      <Footer />
    </Container>
  );
};
