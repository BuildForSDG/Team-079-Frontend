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

const ReportModal = () => {
  const baseURL = "https://helow.herokuapp.com/";

  const [modal, setModal] = useState(false);

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
        location_lng: coordinates.lng
        // viewport_ne_lat: 40.7137011802915,
        // viewport_ne_lng: -74.00674761970849,
        // viewport_sw_lat: 40.7110032197085,
        // viewport_sw_lng: -74.0094455802915,
        // rating: 5,
        // vicinity: "Greenbrier Parkway, United States of America"
      },
      reported_by: {
        id: 3
      },
      reported_at: report.reported_at,
      incident_type: {
        id: +report.incident_type
      }
    };

    const config = {
      headers: {
        "Content-Type": "application/json"
        // "Cache-Control": "no-cache"
      }
    };

    try {
      const res = await axios.post(`${baseURL}api/v1/incident/report/`, obj, config);
      // eslint-disable-next-line no-unused-vars
      const topResponders = await axios.get(`${baseURL}api/v1/responder/find/?incident=${res.data.id}`);
      // const topResponders = await axios.get(`${baseURL}api/v1/responder/find/?incident=19`);
      // eslint-disable-next-line no-console
      // console.log(topResponders);
    } catch (error) {
      // console.error(error);
    }

    // fetch(`${baseURL}api/v1/incident/report`, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //     // "Cache-Control": "no-cache"
    //   },
    //   body
    // // eslint-disable-next-line
    // }).then((res) => res.json()).then((data) => console.log(data)).catch((error) => console.log(error))
  };

  useEffect(() => {
    const getIncidentTypes = async () => {
      const res = await axios(`${baseURL}api/v1/incident/types`);
      // eslint-disable-next-line no-console
      // console.log("AXIOS: ", res.data);
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

  return (
    <div>
      <Link to="incident/report" onClick={toggle}>Report an Accident <span className="icon"><FaAngleDoubleRight /></span></Link>
      {/* <Button color="primary" onClick={toggle}>Report Accident</Button> */}
      <Modal toggle={toggle} isOpen={modal}>
        <ModalHeader toggle={toggle}>Report Accident</ModalHeader>
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
              <Button block color="dark">
                Report
              </Button>
            </FormGroup>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default ReportModal;