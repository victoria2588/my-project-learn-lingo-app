import React from "react";
import { HeroSection } from "./HomePage.styled";
import { HeroSectionLeft } from "../../components/heroSection/heroSectionLeft/HeroSectionLeft";
import { HeroSectionRight } from "../../components/heroSection/heroSectionRight/HeroSectionRight";

const HomePage = () => {
  return (
    <HeroSection>
      <HeroSectionLeft />
      <HeroSectionRight />
    </HeroSection>
  );
};

export default HomePage;
