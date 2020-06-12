import React from "react";
import styled from "styled-components";


const Footer = () => (
  <Wrapper>
    <div id="contact">
      <div>
        <div>
          <h5>Our Mission</h5>
        </div>
        <div>
          <p>
          The rate of mortality arising from road accidents is quite alarming. Our goal is to provide an instant and speedy report/response in accident scenes in order to save as many as possible. This is in line with the SDG goal of preserving the life and health of the people. We intend to achieve this by collaborating with relevant stakeholders and agencies in charge of this in the nation.
          </p>
        </div>
      </div>
      <div>
        <div>
          <h5>Contact Us</h5>
        </div>
        <div>
          <ul>
            <li><b>Email:</b> helow@gmail.com</li>
            <li><b>Facebook:</b> @helow</li>
            <li><b>Twitter:</b> @helow</li>
            <li><b>Instagram:</b> @helow</li>
          </ul>
        </div>
      </div>
    </div>
    <div id="privacy">
      <p>&copy; 2020 Helow. All rights reserved.</p>
    </div>
  </Wrapper>
);

export default Footer;

const Wrapper = styled.div`
    background: #E8E8E8;
    margin-top: 48px;
    text-align: justify;
    text-justify: inter-word;
    color: #5f6368;
    & #contact {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-column-gap: 40px;
        margin-left: 40px;
        padding: 20px;
    }
    p {
      margin-top: 0;
      margin-bottom: 1rem;
    }
    #contact p {
      font-weight: 400;
      line-height: 1.5;
      font-size: 12px;
    }
    ul {
      margin-top: 0;
      margin-bottom: 16px;
      list-style: none;
      font-size: 12px;
      font-weight: 400;
      line-height: 1.5;
    }
    & #contact h5 {
      font-size: 18px;
      margin-bottom: 8px;
      font-weight: 500;
      line-height: 1.2;
    }
    & #privacy {
        background: darkgray;
        font-size: 100%;
        font-weight: 400;
        text-align: center;
        line-height: 1.5;
        padding: 20px;
    }

`;