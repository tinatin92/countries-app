import React from "react";
import { NavLink,NavLinkRenderProps } from "react-router-dom";

import { Container } from "../UI/container";
import headerLogo from "@/assets/logo.svg";
import searchIcon from "@/assets/Search.svg";
import classes from "./header.module.css";

export const Header: React.FC = () => {

  const handleActiveNav = (props: NavLinkRenderProps) => {
    const { isActive } = props;

    if (isActive) {
      return classes["active"];
    } 
  };

  return (
    <header>
      <Container>
        <div className={classes.header}>
          <div className={classes["header-logo"]}>
            <NavLink to="/">
              <img src={headerLogo} alt="Header logo" />
            </NavLink>
          </div>
          <div className={classes.navigation}>
            <nav>
             <NavLink to='/about' className={handleActiveNav}>About AllGlobe</NavLink>
            </nav>
          </div>
          <div className={classes.search}>
            <input type="search" placeholder="Search" />
            <button>
              <img src={searchIcon} alt="search icon" />
            </button>
          </div>
        </div>
      </Container>
    </header>
  );
};
