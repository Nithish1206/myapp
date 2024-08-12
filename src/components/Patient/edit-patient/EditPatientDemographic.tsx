import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";

interface Detail {
  label: string;
  Placeholder: string;
  value: string;
  type: string;
}

interface Person {
  FirstName: string;
  LastName: string;
  Email: string;
  Phone: string;
  Period: string;
  OnboardDate: string;
}

interface Props {
  setShow: (value: string) => void;
  person: Person;
}

const EditPatientDemographic: React.FC<Props> = ({ setShow, person }) => {
  const [details, setDetails] = useState<Detail[]>([
    { label: "First Name", Placeholder: "Enter first Name", value: person.FirstName, type: "text" },
    { label: "Last Name", Placeholder: "Enter last Name", value: person.LastName, type: "text" },
    { label: "Email Address", Placeholder: "Enter email address", value: person.Email, type: "email" },
    { label: "Emergency Contact Number", Placeholder: "Enter emergency contact number", value: person.Phone, type: "text" },
    { label: "DOB", Placeholder: "Enter dob", value: "2003-04-14", type: "date" },
    { label: "Consumption Period", Placeholder: "Enter Consumption Period", value: person.Period, type: "text" },
    { label: "Onboard Date", Placeholder: "Enter onboard date", value: person.OnboardDate, type: "date" },
    { label: "Training", Placeholder: "Select training", value: "Enrolled", type: "text" },
    { label: "Assigned To", Placeholder: "Assigned to", value: "Bruce", type: "text" },
  ]);

  const AddPatientDetails = () => {
    return details.map((detail, index) => (
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
  };

  const handleChange = (value: string, index: number) => {
    const list = [...details];
    list[index].value = value;
    setDetails(list);
  };

  const EditDetail = () => {
    sessionStorage.setItem("AddDetail", JSON.stringify(details));
    setShow("B");
  };

  return (
    <Row className="mt-5 border border-1 rounded p-4 d-flex">
      {AddPatientDetails()}
      <Col className="d-flex justify-content-end gap-4">
        <button className="border-0 p-2 px-3 rounded cancelbtn fw-semibold text-secondary">Cancel</button>
        <button className="border-0 p-2 px-4 rounded nextbtn fw-semibold text-white" onClick={EditDetail}>
          Next
        </button>
      </Col>
    </Row>
  );
};

export default EditPatientDemographic;
