import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Link, useNavigate } from "react-router-dom";
import { instance } from "../API";
import { Spinner } from "react-bootstrap";
import "../CSS/Providers.css";
import { TableRow } from "./TableRow";
import ReactPaginate from "react-paginate";

const Providers = () => {
  const navigate = useNavigate();
  const [providers, setProviders] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProviders, setFilteredProviders] = useState([]);

  useEffect(() => {
    instance
      .get("/products")
      .then((response) => setProviders(response.data))
      .catch((e) => console.log(e));
  }, []);

  useEffect(() => {
    const filtered = providers.filter((provider) => provider.title.toLowerCase().includes(searchTerm.toLowerCase()));
    setFilteredProviders(filtered);
  }, [searchTerm, providers]);

  function PaginatedItems({ itemsPerPage }) {
    const [itemOffset, setItemOffset] = useState(0);
    const endOffset = itemOffset + itemsPerPage;
    const currentItems = filteredProviders.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(filteredProviders.length / itemsPerPage);
    const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage) % filteredProviders.length;
      setItemOffset(newOffset);
    };

    return (
      <>
        <div className="table-responsive  rounded-3 shadow  mt-4 m-0 p-0 border border-1">
          <table className="table m-0 p-0 text-center table-hover">
            <thead className="sticky-top z-1">
              <tr>
                <th scope="col">S.No</th>
                <th scope="col">Patient ID</th>
                <th scope="col" className="text-start">
                  Title
                </th>
                <th scope="col" className="text-nowrap">
                  $ Price
                </th>
                <th scope="col">UpdatedAt</th>
                <th className="Action" scope="col">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>{TableRow(currentItems, navigate, setProviders)}</tbody>
          </table>
        </div>
        <div>
          <ReactPaginate
            breakLabel="..."
            breakClassName="list-group"
            breakLinkClassName="text-decoration-none text-dark break-select"
            nextLabel="next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel="< previous"
            renderOnZeroPageCount={null}
            className="d-flex justify-content-center align-items-center  mt-5 gap-3"
            previousClassName=" list-group"
            pageClassName="list-group d-none d-md-block"
            nextClassName="list-group"
            pageLinkClassName="text-decoration-none  list-group-item hover"
            previousLinkClassName="text-decoration-none  list-group-item hover text-nowrap"
            nextLinkClassName="text-decoration-none list-group-item hover text-nowrap"
            activeLinkClassName="Active-Class"
          />
        </div>
      </>
    );
  }

  return (
    <div className="p-3 p-md-5">
      <header className="d-flex justify-content-between flex-wrap ">
        <h3 className="col-12 col-md-5 m-0 p-0">Provider</h3>
        <div className="col-12 col-md-6 d-flex align-items-center w-auto">
          <div className="icon-input rounded-3 p-1 px-3 w-100 ">
            <Icon icon="ion:search" width="1.5rem" height="1.5rem" className="search-icon" />
            <input
              type="search"
              placeholder="Search"
              className="d-flex border-0 search-input ps-2 w-auto flex-fill"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <Link to="/Providers/AddProviders" className="m-0 ps-2">
            <Icon icon="mingcute:add-fill" width="2.3rem" height="2.3rem" className="plus-icon p-1 rounded p-2" />
          </Link>
        </div>
      </header>
      {providers.length === 0 ? (
        <div className="d-flex align-items-center justify-content-center mt-5 pt-5">
          <p className="text-center fs-3 p-0 m-0 me-2">Loading </p>
          <Spinner animation="border" variant="success" role="status" />
        </div>
      ) : (
        <div>
          <div className="d-none d-lg-block">
            <PaginatedItems itemsPerPage={10} />
          </div>
          <div className="d-none d-md-block d-lg-none">
            <PaginatedItems itemsPerPage={7} />
          </div>
          <div className="d-block d-md-none">
            <PaginatedItems itemsPerPage={5} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Providers;
