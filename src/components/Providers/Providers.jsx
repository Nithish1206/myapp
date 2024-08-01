import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Link } from "react-router-dom";
import { instance } from "../API";
import { Spinner } from "react-bootstrap";
import moment from "moment";

const Providers = () => {
  const [providers, setProviders] = useState([]);
  useEffect(() => {
    instance
      .get("/products")
      .then((response) => setProviders(response.data))
      .catch((e) => console.log(e));
  }, []);

  const ProviderDetails = () => {
    return providers.map((provide, index) => (
      <tr key={provide.id}>
        <td>{index + 1}</td>
        <td>{provide.id}</td>
        <td className="text-start">{provide.title}</td>
        <td>{provide.price}</td>
        <td type="date">{moment.utc(provide.updatedAt).local().format("DD-MM-YYYY")}</td>
        <td className=" Action ">
          <button className="bxs--edit border-0 outline-none me-2"></button>
          <button className="material-symbols--delete-outline border-0 outline-none ms-2"></button>
        </td>
      </tr>
    ));
  };

  return (
    <div className="p-3 p-md-5">
      {providers.length === 0 ? (
        <div className="d-flex align-items-center justify-content-center mt-5 pt-5">
          <p className="text-center fs-3 p-0 m-0 me-2">Loading </p>
          <Spinner animation="border" variant="success" role="status" />
          {console.log(providers)}
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
          <div className="table-responsive border border-1 mt-4 m-0 p-0 overflow-y-auto" style={{ maxHeight: "500px" }}>
            <table className="table table-bordered m-0 p-0 text-center">
              <thead className="sticky-top">
                <tr>
                  <th scope="col">S.No</th>
                  <th scope="col">Patient ID</th>
                  <th scope="col">Title</th>
                  <th scope="col">Price</th>
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
