import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderLogotype = styled(Link)`
  display: flex;
  gap: 8px;
  align-items: center;
`;

export const LogoIcon = styled.svg`
  width: 28px;
  height: 28px;
`;

export const LogoText = styled.span`
  font-weight: 500;
  font-size: 20px;
  line-height: 1.25;

  &:hover,
  &:focus {
    color: var(--color-pink);
  }
`;
