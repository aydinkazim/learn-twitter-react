import React from "react";

import Button from "../components/button";
import NavigationButton from "../components/navigation-button";
import Navigation from "../components/navigation";

export default {
  title: "Buttons",
};

export const Normal = () => <Button>Save</Button>;

export const NavButton = () => <NavigationButton>Menü</NavigationButton>;

export const Nav = () => <Navigation />;
