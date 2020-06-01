import React from "react";
import styled from "styled-components";


const About = () => (
  <Wrapper id="about">
    <div>
      <h3>About</h3>
    </div>
    <div>
      <p>
      Donec porttitor molestie consequat. Cras vitae mauris mi. Suspendisse potenti. Cras tempor, eros nec pellentesque finibus, augue quam ornare risus, sit amet sagittis quam est a metus. Etiam suscipit finibus orci eget molestie. Etiam tortor dui, tincidunt nec felis non, pretium pulvinar odio. Donec in lacus purus. Cras justo orci, pellentesque sit amet metus quis, iaculis viverra est. Nullam aliquam nisi ut orci placerat, id porta ipsum congue. Ut et ipsum sapien. Vivamus tincidunt sapien vitae pretium vulputate. Proin mollis sollicitudin mi. Integer sit amet est vitae nunc iaculis faucibus nec sed odio. Nunc viverra ipsum dui, vel faucibus sapien rhoncus at. Pellentesque auctor convallis blandit.
      Aliquam sit amet neque molestie, gravida nulla a, congue velit. Nunc metus dolor, commodo eu rutrum eu, vulputate quis risus. Vivamus cursus fermentum elit. Ut pellentesque porta nisl, eu molestie mauris varius ut. Vivamus mi elit, pharetra sit amet leo vel, venenatis lacinia sem. Morbi tellus quam, mattis vitae porta eget, dictum ac mi. Maecenas ultricies, erat faucibus eleifend aliquet, felis nunc semper magna, in vestibulum metus dolor vel ante. Donec mattis metus vel convallis auctor.
      Suspendisse est eros, eleifend sed ornare dapibus, feugiat id ligula. Vestibulum non nibh faucibus, viverra ex non, venenatis elit. Curabitur nec dolor id justo sagittis vehicula et vel velit. Pellentesque lacinia imperdiet lacus. Suspendisse at metus ac leo interdum semper sit amet sit amet tortor. Nulla vel viverra nisi, nec consequat sem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
      </p>
    </div>
  </Wrapper>
);

export default About;

const Wrapper = styled.div`
    margin-right: 200px;
    margin-left: 200px;
    & div > h3 {
        text-align: center;
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