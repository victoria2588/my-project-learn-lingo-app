import styled from "styled-components";

export const HeroSectionLeftContainer = styled.div`
  width: 720px;
  height: 530px;
  background-color: var(--color-light-grey);
  border-radius: 30px;
  padding: 98px 64px;
`;

export const HeroSectionLeftTitle = styled.h1`
  /* width: 548px; */
  font-size: 48px;
  font-weight: 500;
  line-height: 1.17;
  letter-spacing: -0.96px;
`;

export const HeroSectionLeftTitleSpan = styled.span`
  background-color: var(--color-pink);
  font-weight: 400;

  font-style: italic;
`;

export const HeroSectionLeftText = styled.p`
  max-width: 471px;
  line-height: 1.14;
  letter-spacing: -0.32px;
  padding-top: 32px;
  padding-bottom: 64px;
`;

export const HeroSectionLeftButton = styled.button`
  width: 267px;
  height: 60px;
  border-radius: 12px;
  background-color: var(--color-pink);
  font-size: 18px;
  font-weight: 700;
  line-height: 1.56;
  border: none;

  &:hover,
  &:focus {
    background-color: var(--color-light-pink);
  }
`;
