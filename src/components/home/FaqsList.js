import React from "react";
import styled from "styled-components";
import Faq from "./Faq";

const faqsData = [
  {
    question: "What does FAQ stand for?",
    answer: "Frequently Asked Question"
  },
  {
    question: "What is the best ice cream flavor?",
    answer: "Coffee with fudge ripple, or homemade strawberry."
  }
];

const FaqsList = () => (
  <StyledFaqsList id="faqslist">
    <div id="second">
      <h2>Helow FAQ</h2>
      {faqsData.map((faq, i) => (
        <Faq key={`faq_ ${i}`} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  </StyledFaqsList>
);

export default FaqsList;

const StyledFaqsList = styled.div`
  margin-right: 200px;
  margin-left: 200px;
  & div#second {
    margin-top: 150px;
    margin-bottom: 48px;
    padding: 1rem;
  }
  & h2 {
    text-align: center;
    font-size: 48px;
    font-style: normal;
    line-height: 1.2;
    font-weight: 300;
    padding-bottom: 3rem!important;
    margin-bottom: .5rem;
  }
`;