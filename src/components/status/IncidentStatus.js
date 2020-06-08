import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";


const IncidentStatus = ({
  description,
  reported_at,
  status,
  location
}) => (
  <Wrapper>
    <div className="container">
      <h4><b>{description}</b></h4>
      <p>Reported At: {(new Date(reported_at)).toLocaleString()}</p>
      <p>Status: { status ? "Open" : "Close"}</p>
      <p>Location: {location.known_name}</p>
    </div>
  </Wrapper>
);

IncidentStatus.propTypes = {
  description: PropTypes.string.isRequired,
  reported_at: PropTypes.string.isRequired,
  status: PropTypes.bool.isRequired,
  location: PropTypes.object.isRequired
};

export default IncidentStatus;

const Wrapper = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  border-radius: 5px;
  & .container {
    padding: 10px 16px;
  }
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }
  p {
    font-size: 16px;
  }
  h4 {
    font-size: 20px;
  }
`;