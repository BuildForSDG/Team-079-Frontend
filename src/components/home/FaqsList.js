import React from "react";
import styled from "styled-components";
import Faq from "./Faq";

const faqsData = [
  {
    question: "What does FAQ stand for?",
    answer: "Frequently Asked Question"
  },
  {
    question: "How do i report an incident?",
    answer: "Reporting an incident is very easy. You just have to clicked on report an accident button and fill the form."
  },
  {
    question: "How can i become a responder?",
    answer: "You have to contact us through our contact informations."
  },
  {
    question: "What to do after reporting an incident?",
    answer: "You can help the victim till our responder get to the scene."
  },
  {
    question: "Can a victim report an incident?",
    answer: "YES, that will make responding to the accident fast."
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
  margin-right: 180px;
  margin-left: 180px;
  @media (max-width: 768px) {
    margin-right: 50px;
    margin-left: 50px;
  }
  @media (max-width: 1024px) {
    margin-right: 50px;
    margin-left: 50px;
  }
  & div#second {
    margin-top: 30px;
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