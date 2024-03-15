import React from "react";
import sprite from "../../images/sprite.svg";
import { HeaderLogotype, LogoIcon, LogoText } from "./logotype.styled";

export const Logotype = () => {
  return (
    <div>
      <HeaderLogotype to="/">
        <LogoIcon>
          <use href={`${sprite}#icon-ukraine`} />
        </LogoIcon>
        <LogoText>Learn Lingo</LogoText>
      </HeaderLogotype>
    </div>
  );
};
