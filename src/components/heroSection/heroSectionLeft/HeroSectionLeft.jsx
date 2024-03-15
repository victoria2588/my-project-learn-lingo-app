import React from "react";
import {
  HeroSectionLeftButton,
  HeroSectionLeftContainer,
  HeroSectionLeftText,
  HeroSectionLeftTitle,
  HeroSectionLeftTitleSpan,
} from "./HeroSectionLeft.styled";

export const HeroSectionLeft = () => {
  return (
    <HeroSectionLeftContainer>
      <HeroSectionLeftTitle>
        Unlock your potential with the best{" "}
        <HeroSectionLeftTitleSpan>language</HeroSectionLeftTitleSpan> tutors
      </HeroSectionLeftTitle>
      <HeroSectionLeftText>
        Embark on an Exciting Language Journey with Expert Language Tutors:
        Elevate your language proficiency to new heights by connecting with
        highly qualified and experienced tutors.
      </HeroSectionLeftText>
      <HeroSectionLeftButton>Get started</HeroSectionLeftButton>
    </HeroSectionLeftContainer>
  );
};
