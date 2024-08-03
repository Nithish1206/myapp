import Swal from "sweetalert2";

export const handleLogout = (navigate) => {
  Swal.fire({
    title: "Are you sure?",
    text: "You want to Logout",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, Logout!",
  }).then((result) => {
    if (result.isConfirmed) {
      sessionStorage.setItem("token", false);
      navigate("/Login");
    }
  });
};
