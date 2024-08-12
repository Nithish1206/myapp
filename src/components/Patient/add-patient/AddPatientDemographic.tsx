import React from "react";
import { Row, Col } from "react-bootstrap";
import { useState } from "react";
import { demographicdetails } from "../../../constant/constant";

interface Props {
  setShow: (value: string) => void;
}

const AddPatientDemographic = ({ setShow }: Props) => {
  const [details, setDetails] = useState(demographicdetails);

  const AddPatientDetails = () => {
    const List = details.map((detail, index: number) => (
      <Col lg={4} key={index} className="mb-5">
        <div>
          <label htmlFor={index.toString()} className="pb-2">
            {detail.label}
          </label>
          <input
            type={detail.type}
            className="form-control shadow-none"
            value={detail.value}
            id={index.toString()}
            placeholder={detail.Placeholder}
            onChange={(e) => handleChange(e.target.value, index)}
          />
        </div>
      </Col>
    ));
    return List;
  };

  const handleChange = (value: string, index: number) => {
    const list = [...details];
    list[index].value = value;
    setDetails(list);
  };

  const AddDetail = () => {
    sessionStorage.setItem("AddDetail", JSON.stringify(details));
    setShow("B");
  };

  return (
    <Row className="mt-5 border border-1 rounded p-1 p-md-4 d-flex">
      {AddPatientDetails()}
      <Col className="d-flex justify-content-end gap-4">
        <button className="border-0 p-2 px-3 rounded cancelbtn fw-semibold text-secondary">Cancel</button>
        <button className="border-0 p-2 px-4 rounded nextbtn fw-semibold text-white" onClick={() => AddDetail()}>
          Next
        </button>
      </Col>
    </Row>
  );
};

export default AddPatientDemographic;
