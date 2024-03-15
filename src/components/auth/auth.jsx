import React from "react";
import sprite from "../../images/sprite.svg";
import {
  AuthButton,
  AuthIcon,
  AuthLink,
  AuthText,
  HeaderAuth,
} from "./auth.styled";

export const Auth = () => {
  return (
    <HeaderAuth>
      <AuthLink to="#">
        <AuthIcon>
          <use href={`${sprite}#icon-log-in-01`} />
        </AuthIcon>
        <AuthText>Log in</AuthText>
      </AuthLink>
      <AuthButton>Registration</AuthButton>
    </HeaderAuth>
  );
};
