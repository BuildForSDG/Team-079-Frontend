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
            Donec porttitor molestie consequat. Cras vitae mauris mi. Suspendisse potenti. Cras tempor, eros nec pellentesque finibus, augue quam ornare risus, sit amet sagittis quam est a metus. Etiam suscipit finibus orci eget molestie. Etiam tortor dui, tincidunt nec felis non, pretium pulvinar odio. Donec in lacus purus. Cras justo orci, pellentesque sit amet metus quis, iaculis viverra est. Nullam aliquam nisi ut orci placerat, id porta ipsum congue. Ut et ipsum sapien. Vivamus tincidunt sapien vitae pretium vulputate. Proin mollis sollicitudin mi. Integer sit amet est vitae nunc iaculis faucibus nec sed odio. Nunc viverra ipsum dui, vel faucibus sapien rhoncus at. Pellentesque auctor convallis blandit.
            Aliquam sit amet neque molestie, gravida nulla a, congue velit. Nunc
          </p>
        </div>
      </div>
      <div>
        <div>
          <h5>Contact Us</h5>
        </div>
        <div>
          <ul>
            <li>Email: helow@gmail.com</li>
            <li>Facebook: @helow</li>
            <li>Twitter: @helow</li>
            <li>Instagram: @helow</li>
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