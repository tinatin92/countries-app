import React from "react";

import { Container } from "../UI/container";
import headerLogo from "@/assets/logo.svg";
import searchIcon from "@/assets/Search.svg";
import classes from "./header.module.css";

export const Header: React.FC = () => {
  return (
    <header>
      <Container>
        <div className={classes.header}>
          <div className={classes["header-logo"]}>
            <a href="#">
              <img src={headerLogo} alt="Header logo" />
            </a>
          </div>
          <div className={classes.navigation}>
            <nav>
              <a href="#">About Us</a>
              <a href="#">Countrie</a>
              <a href="#">Contact</a>
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
