import * as Yup from "yup";

export const listValidation = Yup.object().shape({
  title: Yup.string().min(1, "Too Short!").max(50, "Too Long!").required("*Required"),
  price: Yup.number().required("*Required").positive().integer(),
  description: Yup.string().min(1, "Too Short!").required("*Required"),
});

export const formValidation = Yup.object().shape({
  email: Yup.string().email("Invalid Email").required("*Required"),
  password: Yup.string()
    .required("*Password is required")
    .min(8, "Password must be at least 8 characters")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[0-9]/, "Password must contain at least one digit")
    .matches(/[!@#$%^&*(),.?":{}|<>]/, "Password must contain at least one special character"),
});
