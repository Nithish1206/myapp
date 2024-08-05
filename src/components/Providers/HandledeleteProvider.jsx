import Swal from "sweetalert2";
import { instance } from "../API";

export const handleDelete = (id, setProviders, filteredProviders) => {
  Swal.fire({
    title: "Are you sure?",
    text: "You want to Delete this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "Deleted!",
        text: "Your file has been deleted.",
        icon: "success",
      });
      instance
        .delete(`/products/${id}`)
        .then((response) => {
          console.log(response.data);
          setProviders(filteredProviders.filter((provider) => provider.id !== id));
        })
        .catch((e) => console.log(e));
    }
  });
};
