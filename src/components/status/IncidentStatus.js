import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";


const IncidentStatus = ({
  title,
  reported_at,
  status,
  location
}) => (
  <Wrapper>
    <div className="container">
      <h4><b>{title}</b></h4>
      <p>Reported At: {(new Date(reported_at)).toLocaleString()}</p>
      <p>Status: { status }</p>
      <p>Location: {location.formatted_address}</p>
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
  }
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }
  p {
    font-size: .80em;
  }
  h4 {
    font-size: 1.2em;
  }
`;