import React from "react";
import { HeaderNav, HeaderNavText } from "./navigation.styled";

export const Navigation = () => {
  return (
    <>
      <HeaderNav>
        <HeaderNavText to="/">Home</HeaderNavText>
        <HeaderNavText to="/teachers">Teachers</HeaderNavText>
      </HeaderNav>
    </>
  );
};
