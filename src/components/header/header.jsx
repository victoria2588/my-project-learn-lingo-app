import { Auth } from "../auth/auth";
import { Logotype } from "../logotype/logotype";
import { Navigation } from "../navigation/navigation";
import { HeaderBar } from "./header.styled";

export const Header = () => {
  return (
    <HeaderBar>
      <Logotype />
      <Navigation />
      <Auth />
    </HeaderBar>
  );
};
