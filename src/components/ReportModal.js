/* eslint-disable indent */
/* eslint-disable max-len */
import React, { useState, useEffect } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";
import axios from "axios";
import { FaAngleDoubleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import MapLocation from "./MapLocation";
// import "./App.scss";

const ReportModal = () => {
  const baseURL = "https://helow.herokuapp.com/";

  const [modal, setModal] = useState(false);

  const [submitted, setSubmitted] = useState(false);

  const [responders, setResponders] = useState([]);
  const abuja = { lat: 9.0764785, lng: 7.398574 };

  const [address, setAddress] = useState("");

  const [coordinates, setCoordinates] = useState(abuja);

  const [report, setReport] = useState({
    title: "",
    description: "",
    location: "",
    reported_at: "",
    incident_type: ""
  });

  const changeAddress = (add) => {
    setAddress(add);
  };

  const changeCoordinates = (loc) => {
    setCoordinates(loc);
  };

  const toggle = () => {
    setModal((modalState) => !modalState);
    setSubmitted((state) => {
      if (state) {
        setSubmitted(false);
      }
    });
  };

  const [incidentTypes, setIncidentTypes] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const obj = {
      title: report.title,
      description: report.description,
      location: {
        map_name: address,
        known_name: report.location,
        location_lat: coordinates.lat,
        location_lng: coordinates.lng,
        viewport_ne_lat: coordinates.lat,
        viewport_ne_lng: coordinates.lng,
        viewport_sw_lat: coordinates.lat,
        viewport_sw_lng: coordinates.lng,
        rating: 5,
        vicinity: address
      },
      reported_at: report.reported_at,
      incident_type: +report.incident_type
    };

    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };

    try {
      const res = await axios.post(`${baseURL}api/v1/incident/report/create/`, obj, config);
      setResponders(res.data);
      setSubmitted(true);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
    }
  };

  useEffect(() => {
    const getIncidentTypes = async () => {
      const res = await axios(`${baseURL}api/v1/incident/types/`);
      setIncidentTypes(res.data.results);
      setReport((state) => ({
        ...state,
        incident_type: res.data.results[0].id
      }));
    };
    getIncidentTypes();
  }, []);

  const onChange = (e) => {
    e.persist();
    setReport((state) => ({
      ...state,
      [e.target.name]: e.target.value
    }));
  };

  const selectResonder = async (placeId, incidentId) => {
    try {
      const res = await axios(`${baseURL}api/v1/responder/assign/${incidentId}?place_id=${placeId}`);
      // eslint-disable-next-line no-alert
      alert(`${res.data.message}\nA responder has been successfully assigned`);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
    }
    setModal((modalState) => !modalState);
  };

  return (
    <>
      <Link to='' onClick={toggle}>Report an Accident <span className="icon"><FaAngleDoubleRight /></span></Link>
      <Modal toggle={toggle} isOpen={modal}>
        {!submitted ? (<><ModalHeader toggle={toggle}>Report Accident</ModalHeader>
        <ModalBody>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label for="title">Title</Label>
              <Input
                type="text"
                id="title"
                name="title"
                placeholder="Title"
                className="mb-2"
                maxLength="50"
                value={report.title}
                required
                onChange={onChange}
              />

              <Label for="description">Description</Label>
              <Input
                type="textarea"
                id="description"
                name="description"
                placeholder="Description"
                style={{ resize: "none" }}
                rows="3"
                className="mb-2"
                maxLength="200"
                required
                value={report.description}
                onChange={onChange}
              />

              <Label for="location">Location</Label>
              <Input
                type="text"
                id="location"
                name="location"
                className="mb-3"
                placeholder="Location"
                value={report.location}
                onChange={onChange}
              />

              <MapLocation mapAddress={address} setAddress={changeAddress} setCoordinates={changeCoordinates} coordinates={coordinates} />

              <Label for="reported_at">
                Date and Estimated Time of Accident
              </Label>
              <Input
                type="datetime-local"
                id="reported_at"
                name="reported_at"
                className="mb-2"
                placeholder="Date and Time"
                value={report.date}
                onChange={onChange}
              />

              <Label for="incident_type">Select Incident Type</Label>
              <Input
                type="select"
                id="incident_type"
                name="incident_type"
                placeholder="Title"
                onChange={onChange}
              >
                {incidentTypes.map((incident) => <option key={incident.id} value={incident.id}>{incident.label}</option>) }
              </Input>
              <br />
              <Button block color="primary">
                Report
              </Button>
            </FormGroup>
          </Form>
        </ModalBody></>) : (<>
          <ModalHeader toggle={toggle}>{responders.length && "Report Submitted"}</ModalHeader>
          <ModalBody style={{ textAlign: "center" }}>
        {responders.length ? (<div className="row">
          {responders.map((responder) => (<div key={responder.id} className="col-sm-6 mb-3"><div>{responder.name}</div><div>{responder.vicinity}</div><Button onClick={selectResonder.bind(this, responder.place_id, responder.incident_id)} color='primary'>Select</Button></div>))}
        </div>) : (
          <>
          <h6>No responders within this vicinity</h6>
          <Button onClick={() => {
            setModal((modalState) => !modalState);
          }} color="primary">
                Close
              </Button>
              </>
        )}
            <br/>
          </ModalBody>
        </>)}
      </Modal>
    </>
  );
};

export default ReportModal;