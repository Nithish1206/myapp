import * as Yup from "yup";

export const Validation = Yup.object().shape({
  title: Yup.string().min(1, "Too Short!").max(50, "Too Long!").required("Required"),
  price: Yup.number().required().positive().integer(),
  description: Yup.string().min(1, "Too Short!").required("Required"),
});
