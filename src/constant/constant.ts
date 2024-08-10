const PE = require("../assests/Frame 20.png");
const PIT = require("../assests/Frame 22.png");
const RP=require("../assests/Frame 21.png");

export const profileData = [
  { label: "First Name", value: "Jessica", type: "text" },
  { label: "Last Name", value: "Mark", type: "text" },
  { label: "Email Address", value: "jessica@gmail.com", type: "email" },
  { label: "Gender", value: "Female", type: "text" },
  { label: "DOB", value: "2003-06-12", type: "date" },
  { label: "Phone Number", value: "+1 (201) 874 8486", type: "text" },
  { label: "Address", value: "1027 Edgardo", type: "text" },
  { label: "City", value: "Aelington", type: "text" },
  { label: "State", value: "virginia", type: "text" },
  { label: "Postal Code", value: "22201", type: "text" },
];

export const title = {
  heading: "Empowering healthcare professionals",
  para1: "Empowering healthcare Professionals to deliver",
  para2: "exceptional care while enhancing patient outcomes",
};

export const demographicdetails = [
  { label: "First Name", Placeholder: "Enter first Name", value: "", type: "text" },
  { label: "Last Name", Placeholder: "Enter last Name", value: "", type: "text" },
  { label: "Email Address", Placeholder: "Enter email address", value: "", type: "email" },
  {
    label: "Emergency Contact Number",
    Placeholder: "Enter emergency contact number",
    value: "",
    type: "text",
  },
  { label: "DOB", Placeholder: "Enter dob", value: "", type: "date" },
  {
    label: "Consumption Period",
    Placeholder: "Enter Consumption Period",
    value: "",
    type: "text",
  },
  { label: "Onboard Date", Placeholder: "Enter onboard date", value: "", type: "date" },
  { label: "Training", Placeholder: "Select training", value: "Enrolled", type: "text" },
  { label: "Assigned To", placeholder: "Assigned to", value: "Bruce", type: "text" },
];

export const menuList = [
  { Login: "/" },
  { Home: "/Home" },
  { Dashboard: "/Dashboard" },
  { "Patient List": "/PatientList" },
  { Provider: "/Providers" },
  { "Clinical Trail": "" },
  { "Patient Care Report": "" },
  { "Message Center": "" },
];

export const sidebarItems = [
  {
    icon: "lucide:layout-list",
    to: "/Home",
    index: 0,
  },
  {
    icon: "radix-icons:dashboard",
    to: "/Dashboard",
    index: 1,
  },
  {
    icon: "solar:user-circle-linear",
    to: "/PatientList",
    index: 2,
  },
  {
    icon: "fluent:people-16-regular",
    to: "/Providers",
    index: 3,
  },
  {
    icon: "mage:home-plus",
    to: "/Home", // no route defined
    index: 4,
  },
  {
    icon: "carbon:report",
    to: "/Home", // no route defined
    index: 5,
  },
  {
    icon: "mage:message-dots",
    to: "/Home", // no route defined
    index: 6,
  },
];

export const boxContent = [
  { title: "Patients Enrolled", count: 120, img: PE },
  { title: "Patients in treatment", count: 80, img: PIT },
  { title: "Recoverd Patients", count: 220, img: RP },
];
