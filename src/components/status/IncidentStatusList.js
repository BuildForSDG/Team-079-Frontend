import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Pagination from "react-js-pagination";
import IncidentStatus from "./IncidentStatus";
import FilterStatus from "./FilterStatus";

const IncidentStatusList = () => {
  const baseURL = "https://helow.herokuapp.com/";
  const [incident, setIncident] = useState([]);
  const [query, setQuery] = useState({ queryString: "ALL" });
  const [totalPages, setTotalPages] = useState({ numOfPages: null });
  const [currentPage, setCurrentPage] = useState({ activePage: 1 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (query.queryString === "ALL") {
      fetch(`${baseURL}api/v1/incident/report/filter`).then((response) => response.json())
        .then((data) => {
          const { count } = data;
          setIncident([data]);
          setTotalPages({ numOfPages: count });
          setLoading(false);
        });
    } else {
      setCurrentPage({ activePage: 1 });
      fetch(`${baseURL}api/v1/incident/report/filter?status=${query.queryString}`).then((response) => response.json())
        .then((data) => {
          const { count } = data;
          setIncident([data]);
          setTotalPages({ numOfPages: count });
          setLoading(false);
        });
    }
  }, [query]);

  const handleIncident = () => incident[0].results.map((element) => <IncidentStatus key={element.id} {...element} />);
  const handlePageChange = (pageNumber) => {
    setLoading(true);
    if (query.queryString === "ALL") {
      fetch(`${baseURL}api/v1/incident/report/filter?page=${pageNumber}`).then((response) => response.json())
        .then((data) => {
          setIncident([data]);
          setCurrentPage({ activePage: pageNumber });
          setLoading(false);
        });
    } else {
      fetch(`${baseURL}api/v1/incident/report/filter?page=${pageNumber}&status=${query.queryStringy}`).then((response) => response.json())
        .then((data) => {
          setIncident([data]);
          setCurrentPage({ activePage: pageNumber });
          setLoading(false);
        });
    }
  };

  const handleSubmit = (value) => setQuery({ queryString: value });

  return (
    <Wrapper>
      { loading ? <h1>Loading.......</h1>
        : <>
          <FilterStatus onSubmit={ handleSubmit }/>
          <div className="card-list">
            {handleIncident()}
          </div>
          <Pagination
            activePage={currentPage.activePage}
            itemsCountPerPage={10}
            totalItemsCount={totalPages.numOfPages}
            pageRangeDisplayed={5}
            itemClass="page-item"
            linkClass="page-link"
            className="testing"
            onChange={handlePageChange}
          />
        </>
      }
    </Wrapper>
  );
};

export default IncidentStatusList;

const Wrapper = styled.div`
    margin-right: 200px;
    margin-left: 200px;
    font-size: 18px;
    & .card-list {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 15px;
      margin-bottom: 20px;
    }
    & .page-item {
      font-size: 16px !important;
    }
`;