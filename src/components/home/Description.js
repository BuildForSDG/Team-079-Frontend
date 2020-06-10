import React  from "react";
import styled from "styled-components";
import { useSpring, config } from "react-spring";
import { Link } from "react-router-dom";
import { FaAngleDoubleRight } from "react-icons/fa";
import ReportModal from "../ReportModal";
import Logo from "../../assets/logo.png"

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
          <p className="helow">In times when you just had or wittness an accident, quick response is needed by emergency services to saves lives. Report an accident using, Helow and emergency services will be with the victims within minutes.</p>
          <div id="links">
            <ReportModal />
            <Link to="/incident/status">View all Accident <span className="icon"><FaAngleDoubleRight /></span></Link>
          </div>
        </div>
        <div className="home-page">
          <img src={Logo} alt="description"/>
        </div>
      </div>
    </Wrapper>
  );
};

export default Description;

const Wrapper = styled.div`
    margin-right: 180px;
    margin-left: 180px;
    text-align: justify;
    text-justify: inter-word;
    @media (max-width: 768px) {
      margin-right: 50px;
      margin-left: 50px;
      #links > a {
        font-size: 12px;
        padding: 15px 20px;
      }
      #describe div:first-child() {
        margin-bottom: 20px;
      }
    }
    @media (max-width: 1024px) {
      margin-right: 50px;
      margin-left: 50px;
    }
    & #describe {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-column-gap: 60px;
        @media (max-width: 768px) {
          grid-template-columns: 1fr;
        }
    }
   
    h1 { 
      color: #5f6368; 
      font-size: 50px; 
      font-weight: normal; 
      line-height: 54px; 
      margin: 0 0 20px;; 
    }
    .helow { 
      color: #5f6368; 
      font-size: 18px; 
      line-height: 28px; 
      margin: 0 0 28px;
    }
    #links {
      display: flex;
    }
    #links > a:first-child {
      margin-right: 20px;
    }
    #links > a {
      text-decoration: none;
      background: #584bbf;
      font-size: 16px;
      color: #fff;
      padding: 18px 23px;
      text-align: left;
      @media (max-width: 1024px) {
          font-size: 14px;       
        }
      }
    }
    #links .icon {
      top: 2px;
      font-size: 12px;
    }
    #describe .home-page img {
      width: 100%;
    }
`;
