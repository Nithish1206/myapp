import React from "react";
import { useParams } from "react-router-dom";

const DeletePatient = () => {
  const { id } = useParams();
  const patientList = JSON.parse(localStorage.getItem("PatientData"));
  const handleDelete = () => {
    const temp = patientList.map((list) => list.Id !== id);
    localStorage.setItem("PatientData", JSON.stringify(temp));
  };

  return (
    <div>
      {handleDelete()}
      {console.log("Successfully Deleted :)")}
    </div>
  );
};

export default DeletePatient;
