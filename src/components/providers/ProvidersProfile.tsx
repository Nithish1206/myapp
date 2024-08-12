import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import moment from "moment";
import Swal from "sweetalert2";
import { useGetProductQuery, useDeleteProductMutation } from "../service/apiSlice";

const ViewProviders = () => {
  sessionStorage.setItem("ProfileisActive", "true");
  const navigate = useNavigate();
  const { id } = useParams();

  const { data: providers, isLoading } = useGetProductQuery(id);
  const [deleteProduct] = useDeleteProductMutation();

  ////handleDelete
  const handleDelete = (id: string | undefined) => {
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
        navigate("/Providers");
      }
    });
  };

  return (
    <div className="p-3 p-md-5 ">
      <div className="d-flex">
        <Link to="/Providers" className="text-decoration-none">
          <h4 className="text-secondary">Providers</h4>
        </Link>
        <span className="iconamoon--arrow-right-2"></span>
        <h4 className="text-color-blue">Provider Profile</h4>
      </div>
      {isLoading ? (
        <div className="d-flex align-items-center justify-content-center mt-5 pt-5">
          <p className="text-center fs-3 p-0 m-0 me-2">Loading </p>
          <Spinner animation="border" variant="info" role="status" />
        </div>
      ) : (
        <div className="d-flex justify-content-center">
          <div className="mt-4 border border-1 rounded p-3 w-75">
            <div className="d-flex justify-content-between">
              <h3>{providers.title}</h3>
              <p className="fw-medium text-secondary">Updated At: {moment.utc(providers.updatedAt).local().format("DD-MM-YYYY, HH:MM A ")}</p>
            </div>

            <div className="d-flex  gap-5">
              {providers.images.map((image: string, index: number) => (
                <div key={index}>
                  <img src={image} alt="" width={200} className="rounded mt-5" />
                </div>
              ))}
            </div>
            <div className="mt-3">
              <h5 className="text-success">Price : ${providers.price}</h5>
            </div>
            <div className="mt-5 overflow-y-auto text-area">
              <p>{providers.description}</p>
            </div>
            <div className="text-end mt-3">
              <Link to={`/Providers/EditProvider/${id}`}>
                <button className="border-0 px-3 py-1 rounded me-2 text-white submit-btn">Edit</button>
              </Link>

              <button
                className="border-0 px-3 py-1 rounded bg-danger text-white"
                onClick={() => {
                  handleDelete(id);
                }}>
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ViewProviders;
