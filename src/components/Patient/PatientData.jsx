const PatientData = () => {
  const patient = [
    {
      id: 1,
      name: "John",
      email: "hariprakash99@gmail.com",
      phone: "9942625852",
      issueType: "Depression",
      period: "72",
      onboardDate: "12/06/2024",
      training: "Enrolled",
      assignedTo: "Bruce Wayne",
      score: "8/10",
    },
    {
      id: 2,
      name: "hariprakash",
      email: "hariprakash99@gmail.com",
      phone: "9942625852",
      issueType: "Depression",
      period: "72",
      onboardDate: "12/06/2024",
      training: "Enrolled",
      assignedTo: "Bruce Wayne",
      score: "8/10",
    },
  ];
  sessionStorage.setItem("PatientData", JSON.stringify(patient));
};

export default PatientData;
