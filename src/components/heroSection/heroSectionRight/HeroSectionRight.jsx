import React from "react";
import {
  HeroSectionRightContainer,
  // HeroSectionRightImageComp,
  HeroSectionRightImageTutor,
} from "./HeroSectionRight.styled";

import tutor from "../../../images/tutor.png";
// import iMac from "../../../images/iMac.png";
import sprite from "../../../images/sprite.svg";
export const HeroSectionRight = () => {
  return (
    <HeroSectionRightContainer>
      <divHeroSectionRightImageWrapper>
        <HeroSectionRightImageTutor src={tutor} alt="" />
        <svg>
          <use href={`${sprite}#icon-Mac-2`} />
        </svg>
        {/* <HeroSectionRightImageComp src={iMac} alt="" /> */}
      </divHeroSectionRightImageWrapper>
    </HeroSectionRightContainer>
  );
};
