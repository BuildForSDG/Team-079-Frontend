import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { FaMapMarkerAlt, FaClock, FaRegCheckCircle } from "react-icons/fa";


const IncidentStatus = ({
  title,
  reported_at,
  status,
  location 
}) => (
  <Wrapper>
    <div className="container">
      <h4><b>{title}</b></h4>
      <p><span><FaClock /></span> {(new Date(reported_at)).toLocaleString()}</p>
      <p><span><FaRegCheckCircle /></span> { status }</p>
      <p><span><FaMapMarkerAlt /></span> {location.map_name}</p>
    </div>
  </Wrapper>
);

IncidentStatus.propTypes = {
  title: PropTypes.string.isRequired,
  reported_at: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  location: PropTypes.object.isRequired
};

export default IncidentStatus;

const Wrapper = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  border-radius: 5px;
  & .container {
    padding: 10px 16px; 
    & span{
      font-size: 16px;
      margin-right: 5px;
    }
  }
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }
  p {
    font-size: .80em;
    color: #5f6368;
  }
  h4 {
    font-size: 1.5em;
    color: #5f6368;
  }
`;