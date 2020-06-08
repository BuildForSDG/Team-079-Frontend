import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Pagination from "react-js-pagination";
import IncidentStatus from "./IncidentStatus";

const IncidentStatusList = () => {
  const baseURL = "https://helow.herokuapp.com/";
  const [incident, setIncident] = useState([]);
  const [totalPages, setTotalPages] = useState({ numOfPages: null });
  const [currentPage, SetCurrentPage] = useState({ activePage: 1 });
  const [loading, setLoading] = useState(true);

  useEffect((queryString = true) => {
    fetch(`${baseURL}api/v1/incident/report/filter?status=${queryString}`).then((response) => response.json())
      .then((data) => {
        const { count } = data;
        setIncident([data]);
        setTotalPages({ numOfPages: count });
        setLoading(false);
      });
  }, []);

  const handleIncident = () => incident[0].results.map((element) => <IncidentStatus key={element.id} {...element} />);
  const handlePageChange = (pageNumber, queryString = true) => {
    setLoading(true);
    fetch(`https://helow.herokuapp.com/api/v1/incident/report/filter?page=${pageNumber}&status=${queryString}"`).then((response) => response.json())
      .then((data) => {
        setIncident([data]);
        SetCurrentPage({ activePage: pageNumber });
        setLoading(false);
      });
  };
  return (
    <Wrapper>
      { loading ? <h1>Loading.......</h1>
        : <>
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