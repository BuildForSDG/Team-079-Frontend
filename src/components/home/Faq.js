import React, { useState } from "react";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";
import useResizeAware from "react-resize-aware";
import PropTypes from "prop-types";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const Faq = (props) => {
  const { question, answer } = props;
  const [isOpen, toggleOpen] = useState(false);
  const [resizeListener, { height }] = useResizeAware();
  
  const animProps = useSpring({
    height: isOpen ? height : 0,
    opacity: isOpen ? 1 : 0,
  });

  return (
    <StyledFaq>
      <h4 className="faq-question" onClick={() => toggleOpen(!isOpen)}>
        <span>{question}</span> <span>{isOpen ? (<FaAngleUp />) : (<FaAngleDown />)}</span>
      </h4>

      <animated.div className="faq-answer" style={{ ...animProps }}>
        <span style={{ position: "relative" }}>
          {resizeListener}
          {answer}
        </span>
      </animated.div>
    </StyledFaq>
  );
};


Faq.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired
}

export default Faq;

const StyledFaq = styled.div`
  cursor: pointer;
  h4.faq-question {
    display: flex;
    justify-content: space-between;
    padding: 28px 32px;
    border: 1px solid #dfdfdf;
    box-shadow: 0 1px 2px rgba(0,0,0,.08);
    transition: box-shadow .2s;
    margin-bottom: 0;
    font-size: 24px;
    font-weight: 500;
    font-style: normal;
  }
  h4.faq-question:last-child {
    justify-self: end;
  }
  div.faq-answer {
    border: 0;
    background: #fff;
    overflow: hidden;
    font-size: 16px;
    margin-top: 0;
    color: #767676;
    margin-bottom: 1rem;
    font-style: normal;
    line-height: 1.5;

    span {
      display: block; 
      padding: 20px 10px;
    }
  }
`;