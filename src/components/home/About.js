import React from "react";
import styled from "styled-components";


const About = () => (
  <Wrapper id="about">
    <div>
      <h3>About Us</h3>
    </div>
    <div>
      <p>
      Accidents on the highways are inevitable. However, it should not be a death sentence. Our mission is to mitigate the mortality rates with our smart report/response system on the go.
      Helow is here to aid you to get the desired help at critical times quite seamlessly, when help is what is needed to save life.
      Simply logon to our platform, capture and report the incident to get realtime location search for the appropriate help needed based on the category of the report. We would then present you with a handful options of nearby assistance to make your choice. Once you make your choice, we would mobilize your selected responder to quickly assist you. Help is on the way. Tad simple.
      </p>
    </div>
  </Wrapper>
);

export default About;

const Wrapper = styled.div`
    margin-right: 180px;
    margin-left: 180px;
    text-align: justify;
    text-justify: inter-word;
    @media (max-width: 768px) {
      margin-right: 50px;
      margin-left: 50px;
    }
    @media (max-width: 1024px) {
      margin-right: 50px;
      margin-left: 50px;
    }
    & div > h3 {
        text-align: center;
        color: #5f6368;
        font-size: 48px;
        font-style: normal;
        font-weight: 300;
        margin-bottom: 12px;
    }
    & div > p {
        padding: 10px;
        padding-left: 20px;
        font-size: 16px;
        color: #767676;
    }
`;