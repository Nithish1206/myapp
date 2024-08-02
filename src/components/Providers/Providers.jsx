import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Link, useNavigate } from "react-router-dom";
import { instance } from "../API";
import { Spinner } from "react-bootstrap";
import moment from "moment";
import "../CSS/Providers.css";
import Swal from "sweetalert2";

const Providers = () => {
  const navigate = useNavigate();
  const [providers, setProviders] = useState([]);

  useEffect(() => {
    instance
      .get("/products")
      .then((response) => setProviders(response.data))
      .catch((e) => console.log(e));
  }, [providers]);

  const ProviderDetails = () => {
    return providers.map((provide, index) => (
      <tr key={provide.id}>
        <td>{index + 1}</td>
        <td>{provide.id}</td>
        <td
          className="text-start on-hover"
          onClick={() => {
            navigate(`/Providers/ViewProvider/${provide.id}`);
          }}>
          {provide.title}
        </td>
        <td>$ {provide.price}</td>
        <td type="date">{moment.utc(provide.updatedAt).local().format("DD-MM-YYYY")}</td>

        <td className=" Action text-nowrap">
          <Link to={`/Providers/EditProviders/${provide.id}`} className="bxs--edit border-0 outline-none me-2"></Link>
          <button
            className="material-symbols--delete-outline border-0 outline-none ms-2"
            onClick={() => {
              handleDelete(provide.id);
            }}></button>
        </td>
      </tr>
    ));
  };

  ////handle Delete
  const handleDelete = (id) => {
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
            setProviders(providers.filter((provider) => provider.id !== id));
          })
          .catch((e) => console.log(e));
      }
    });
  };

  return (
    <div className="p-3 p-md-5">
      {providers.length === 0 ? (
        <div className="d-flex align-items-center justify-content-center mt-5 pt-5">
          <p className="text-center fs-3 p-0 m-0 me-2">Loading </p>
          <Spinner animation="border" variant="success" role="status" />
        </div>
      ) : (
        <div>
          <header className="d-flex justify-content-between flex-wrap ">
            <h3 className="col-12 col-md-6 m-0 p-0">Provider</h3>
            <div className="col-12 col-md-6 d-flex align-items-center w-auto">
              <div className="icon-input rounded-3 p-1 px-3 w-100 ">
                <Icon icon="ion:search" width="1.5rem" height="1.5rem" className="search-icon" />
                <input
                  type="search"
                  placeholder="Search"
                  className="d-flex border-0 search-input ps-2 w-auto flex-fill"
                />
              </div>

              <Link to="/Providers/AddProviders" className="m-0 p-2">
                <Icon icon="mingcute:add-fill" width="2.3rem" height="2.3rem" className="plus-icon p-1 rounded p-2" />
              </Link>
            </div>
          </header>
          <div className="table-responsive  rounded-3 shadow  mt-4 m-0 p-0 ">
            <table className="table m-0 p-0 text-center">
              <thead className="sticky-top">
                <tr>
                  <th scope="col">S.No</th>
                  <th scope="col">Patient ID</th>
                  <th scope="col">Title</th>
                  <th scope="col">$ Price</th>
                  <th scope="col">UpdatedAt</th>
                  <th className="Action" scope="col">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>{ProviderDetails()}</tbody>
            </table>
          </div>
          <h5 className="mt-3">List count : {providers.length}</h5>
        </div>
      )}
    </div>
  );
};

export default Providers;
