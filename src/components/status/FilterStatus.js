import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Formik } from "formik";


const FilterStatus = ({ onSubmit = (f) => f }) => {
  const handleSubmit = ({ value }) => {
    onSubmit(value);
  };
  return (
    <Form>
      <Formik
        initialValues={{ value: "parrot" }}
        onSubmit={handleSubmit}
      >
        {({ values: { value }, handleChange, submitForm }) => (
          <select
            name="value"
            value={value}
            id="status-select"
            onChange={(e) => {
              handleChange(e);
              submitForm();
            }}
          >
            <option selected="selected" disabled="disabled">Filter Incident</option>
            <option value="ALL">All</option>
            <option value="STATUS_PENDING">Pending</option>
            <option value="STATUS_AWAIT">Awaiting Responder</option>
            <option value="STATUS_RESOLVED">Resolved</option>
          </select>
        )}
      </Formik>
    </Form>
  );
};

FilterStatus.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default FilterStatus;

const Form = styled.div`
    margin-bottom: 26px;
    color: #5f6368;
    & #status-select{
      font-size: 16px;
      color: #5f6368;
      padding: 5px;
      border: 0;
      border-bottom: 2px solid #5f6368; 
      font-weight: bold;
      letter-spacing: 2px;
      border-radius: 0;
      &:focus, &:active {
        outline: 0;
        color: #349eeb;
        border-bottom-color: #349eeb;
      }
      & option:hover, option:active{
        border: none;
        outline: 0;
      }
    }
`;