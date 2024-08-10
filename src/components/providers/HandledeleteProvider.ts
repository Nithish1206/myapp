import Swal from "sweetalert2";

const HandledeleteProvider = (id:number, deleteProduct:React.Dispatch<number>) => {
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
      deleteProduct(id);
    }
  });
};
export default HandledeleteProvider;
