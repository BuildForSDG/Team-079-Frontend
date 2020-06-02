import React from "react";
import styled from "styled-components";
import { useSpring, config } from "react-spring";
import { Link } from "react-router-dom";
import { FaAngleDoubleRight } from "react-icons/fa";
import ReportModal from "../ReportModal";
// import "./App.scss";
import "../../App.scss";

const Description = () => {
  const homeAnimation = useSpring({
    from: { transform: "translate3d(0, 30px, 0)", opacity: 0 },
    to: { transform: "translate3d(0, 0, 0)", opacity: 1 },
    delay: 2000,
    config: config.wobbly
  });
  return (
    <Wrapper style={homeAnimation }>
      <div id="describe">
        <div>
          <h1>Helow</h1>
          <p>In times when you just had or wittness an accident, quick response is needed by emergency services to saves lives. Report an accident using, Helow and emergency services will be with the victims within minutes.</p>
          <div id="links">
            <ReportModal />
            <Link to="incident/views">View all Accident <span className="icon"><FaAngleDoubleRight /></span></Link>
          </div>
        </div>
        <div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Description;

const Wrapper = styled.div`
    margin-right: 200px;
    margin-left: 200px;
    & #describe {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
    h1 { 
      color: #5f6368; 
      font-size: 50px; 
      font-weight: normal; 
      line-height: 54px; 
      margin: 0 0 20px;; 
    }
    p { 
      color: #5f6368; 
      font-size: 18px; 
      line-height: 28px; 
      margin: 0 0 28px;
    }
    #links {
      display: flex;
      justify-content: space-between;
      position: absolute;
    }
    #links > a:first-child {
      margin-right: 34px;
    }
    #links > a {
      text-decoration: none;
      background: #584bbf;
      font-size: 16px;
      color: #fff;
      padding: 20px 25px;
    }
    #links > a > .icon {
      position: relative;
      top: 2px;
      font-size: 12px;
    }
`;