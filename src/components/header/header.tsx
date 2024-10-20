import React, { useEffect, useState } from "react";
import { NavLink, NavLinkRenderProps, useParams, useNavigate } from "react-router-dom";
import { Container } from "../UI/container";
import headerLogo from "@/assets/logo.svg";
import searchIcon from "@/assets/Search.svg";
import classes from "./header.module.css";

const navData = {
  en: {
    about: "About AllGlobe",
    contact: "Contact",
  },
  ka: {
    about: "ჩვენს შესახებ",
    contact: "კონტაქტი",
  },
};

export const Header: React.FC = () => {
  const { lang } = useParams();  
  const navigate = useNavigate();


  const [content, setContent] = useState(navData.ka);

  
  useEffect(() => {
    if (lang && navData[lang]) {
      
      setContent(navData[lang]);  
    } else {
      
      setContent(navData.ka);
    }
  }, [lang]);


  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLang = e.target.value;
    navigate(`/${selectedLang}`); 
  };

  const handleActiveNav = (props: NavLinkRenderProps) => {
    const { isActive } = props;
    return isActive ? classes["active"] : undefined;
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
              <NavLink to="about" className={handleActiveNav}>
                {content.about}
              </NavLink>
              <NavLink to="contact" className={handleActiveNav}>
                {content.contact}
              </NavLink>
              <select value={lang} name="lang" id="lang" onChange={handleLanguageChange}>
                <option value="en">ENG</option>
                <option value="ka">GEO</option>
              </select>
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
