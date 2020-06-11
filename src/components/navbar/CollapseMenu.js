import React from "react";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import { animateScroll as scroll, Link } from "react-scroll";

const CollapseMenu = (props) => {
  const history = useHistory();
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  const handleClick = () => {
    scrollToTop();
    const navLink = document.getElementsByTagName("a");
    const arrLinks = Array.from(navLink);
    const removeClass = () => {
      // eslint-disable-next-line
      arrLinks.map((element) => {
        element.classList.remove("active");
        element.removeAttribute("style");
      });
    };
    removeClass();
    arrLinks.forEach((link) => {
      link.addEventListener("click", ({ target }) => {
        const { name } = target;
        const home = document.getElementById("top");
        const incident = document.getElementById("incident");
        const abouts = document.getElementById("abouts");
        const faq = document.getElementById("faq");
        const contacts = document.getElementById("contacts");
        switch (name) {
        case "about":
          abouts.classList.add("active");
          history.push("/");
          break;
        case "incident":
          incident.classList.add("active");
          history.push("/incident/status")
          break;
        case "faq":
          faq.classList.add("active");
          history.push("/");
          break;
        case "contact":
          contacts.classList.add("active");
          break;
        case "home":
          home.classList.add("active");
          history.push("/");
          break;
        default:
        }
      });
    });
  }
  const { open } = useSpring({ open: props.navbarState ? 0 : 1 });

  if (props.navbarState === true) {
    return (
      <CollapseWrapper style={{
        transform: open.interpolate({
          range: [0, 0.2, 0.3, 1],
          output: [0, -20, 0, -200]
        }).interpolate((openValue) => `translate3d(0, ${openValue}px, 0`)
      }}
      >
        <NavLinks>
          <Link
            onClick={handleClick}
            activeClass="active"
            id="top"
            name="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >home</Link>
          <Link
            activeClass="active"
            onClick={handleClick}
            id="incident"
            name="incident"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >incident</Link>
          <Link
            activeClass="active"
            onClick={handleClick}
            to="about"
            name="about"
            id="abouts"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >about</Link>
          <Link
            activeClass="active"
            onClick={handleClick}
            to="contact"
            name="contact"
            id="contacts"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >contact</Link>
          <Link
            activeClass="active"
            onClick={handleClick}
            to="faqslist"
            name="faq"
            id="faq"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >faq</Link>
        </NavLinks>
      </CollapseWrapper>
    );
  }
  return null;
};

CollapseMenu.propTypes = {
  handleNavbar: PropTypes.func.isRequired,
  navbarState: PropTypes.bool.isRequired
};

export default CollapseMenu;

const CollapseWrapper = styled(animated.div)`
  background: #349eeb;
  position: fixed;
  top: 4.5rem;
  left: 0;
  right: 0;
`;

const NavLinks = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  padding: 2rem 1rem 2rem 2rem;
  & li {
    transition: all 300ms linear 0s;
  }

  & a {
    font-size: 1.4rem;
    line-height: 2;
    color: #fff;
    text-transform: uppercase;
    text-decoration: none;
    cursor: pointer;
  }
`;