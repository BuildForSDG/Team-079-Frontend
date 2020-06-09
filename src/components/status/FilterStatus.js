import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";


const FilterStatus = ({ onSubmit = (f) => f }) => {
  const [inputValue, setInputValue] = useState({ value: "" });
  const handleChange = ({ target }) => setInputValue({ value: target.value });
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(inputValue.value);
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Select value={ inputValue.value } onChange={handleChange}>
        <option selected="selected" disabled="disabled">Status</option>
        <option value="">All</option>
        <option value="STATUS_PENDING">Pending</option>
        <option value="STATUS_AWAIT">Awaiting Responder</option>
        <option value="STATUS_RESOLVED">Resolved</option>
      </Select>
      <input className="button" type="submit" value="Submit" />
    </Form>
  );
};

FilterStatus.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default FilterStatus;

const Form = styled.form`
    margin-bottom: 26px;
    .button {
        background-color: #349eeb;
        border: none;
        color: white;
        padding: 10px 15px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        margin-left: 15px;
      }
`

const Select = styled.select`
font-size: 16px;
padding: 4px;
border: 0;
border-bottom: 2px solid black; 
font-weight: bold;
letter-spacing: 2px;
border-radius: 0;
&:focus, &:active {
  outline: 0;
  border-bottom-color: red;
}
  `;