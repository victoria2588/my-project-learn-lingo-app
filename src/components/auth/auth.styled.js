import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderAuth = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;

export const AuthLink = styled(Link)`
  display: flex;
  gap: 8px;
`;

export const AuthIcon = styled.svg`
  width: 20px;
  height: 20px;
`;

export const AuthText = styled.p`
  font-weight: 700;

  &:hover,
  &:focus {
    color: var(--color-pink);
  }
`;

export const AuthButton = styled.button`
  background-color: var(--color-black);
  padding: 14px 39px;
  border-radius: 12px;
  color: var(--color-white);
  font-weight: 700;
  /* border: none; */

  &:hover,
  &:focus {
    background-color: transparent;
    color: var(--color-black);
  }
`;
