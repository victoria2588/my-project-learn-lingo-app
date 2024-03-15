import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const HeaderNav = styled.nav`
  display: flex;
  gap: 28px;
`;

export const HeaderNavText = styled(NavLink)`
  &:hover,
  &focus {
    color: var(--color-pink);
  }
`;
