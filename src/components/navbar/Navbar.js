import React from "react";
import styled from "styled-components";
import { useSpring, animated, config } from "react-spring";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { Link, animateScroll as scroll } from "react-scroll";

import BurgerMenu from "./BurgerMenu";
import CollapseMenu from "./CollapseMenu";

const Navbar = (props) => {
  window.addEventListener("DOMContentLoaded", (event) => {
    const navLink = document.getElementsByTagName("a");
    const arrLinks = Array.from(navLink);
    arrLinks.forEach((link) => {
      link.addEventListener("click", ({ target }) => {
        const { name } = target;
        const home = document.getElementById("top");
        switch (name) {
        case "about":
          home.classList.remove("active");
          home.removeAttribute("style");
          break;
        case "faq":
          home.classList.remove("active");
          home.removeAttribute("style");
          break;
        case "contact":
          home.classList.remove("active");
          home.removeAttribute("style");
          break;
        case "home":
          home.classList.add("active");
          break;
        default:
        }
      });
    });
  });

  const activeStyle = {
    color: "#349eeb",
    marginBottom: "0",
    borderBottom: "2px solid #349eeb",
    paddingBottom: "16px"
  };

  const barAnimation = useSpring({
    from: { transform: "translate3d(0, -10rem, 0)" },
    transform: "translate3d(0, 0, 0)"
  });

  const linkAnimation = useSpring({
    from: { transform: "translate3d(0, 30px, 0)", opacity: 0 },
    to: { transform: "translate3d(0, 0, 0)", opacity: 1 },
    delay: 800,
    config: config.wobbly
  });

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <NavBar style={barAnimation}>
        <FlexContainer>
          <NavLinks style={linkAnimation}>
            <NavLink to="/" id="top" name="home" onClick={scrollToTop} activeStyle={activeStyle}>home</NavLink>
            <Link
              activeClass="active"
              to="about"
              name="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >about</Link>
            <Link
              activeClass="active"
              to="contact"
              name="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >contact</Link>
            <Link
              activeClass="active"
              to="faqslist"
              name="faq"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >faq</Link>
          </NavLinks>
          <BurgerWrapper>
            <BurgerMenu
              navbarState={props.navbarState}
              handleNavbar={props.handleNavbar}
            />
          </BurgerWrapper>
        </FlexContainer>
      </NavBar>
      <CollapseMenu
        navbarState={props.navbarState}
        handleNavbar={props.handleNavbar}
      />
    </>
  );
};

Navbar.propTypes = {
  handleNavbar: PropTypes.func.isRequired,
  navbarState: PropTypes.bool.isRequired
};

export default Navbar;

const NavBar = styled(animated.nav)`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  background: #fff;
  z-index: 1;
  font-size: 1.4rem;
  border-bottom: 1px solid #e6ebf0;
`;

const FlexContainer = styled.div`
  max-width: 120rem;
  display: flex;
  margin: auto;
  padding: 0 2rem;;
  justify-content: space-between;
  height: 5rem;
`;

const NavLinks = styled(animated.ul)`
  justify-self: start;
  list-style-type: none;
  margin: auto 0;
  & .active {
    color: #349eeb;
    margin-bottom: 0;
    border-bottom: 2px solid #349eeb;
    padding-bottom: 16px;
  }
  & a {
    color: #5f6368;
    text-transform: uppercase;
    font-weight: 600;
    border-bottom: 1px solid transparent;
    margin: 0 1.5rem;
    transition: all 300ms linear 0s;
    text-decoration: none;
    cursor: pointer;

    @media (max-width: 768px) {
      display: none;
    }
  }
`;

const BurgerWrapper = styled.div`
  margin: auto 0;

  @media (min-width: 769px) {
    display: none;
  }
`;