import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Link } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import "../../css/Providers.css";
import { useGetAllProductsQuery, useDeleteProductMutation } from "../service/apiSlice";
import { PaginatedItems } from "./Pagination";
import { Provider } from "./TableRow";

const Providers = () => {
  sessionStorage.setItem("ProfileisActive", "false");
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProviders, setFilteredProviders] = useState<Provider[]>([]);

  const [deleteProduct] = useDeleteProductMutation();

  const { data: providers, isLoading, isSuccess } = useGetAllProductsQuery("products");

  useEffect(() => {
    const fetchItems = () => {
      const filtered = providers.filter((provider: { title: string; }) => provider.title.toLowerCase().includes(searchTerm.toLowerCase()));
      setFilteredProviders(filtered);
    };
    isSuccess && fetchItems();
  }, [providers, searchTerm, isSuccess]);

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
      {isLoading ? (
        <div className="d-flex align-items-center justify-content-center mt-5 pt-5">
          <p className="text-center fs-3 p-0 m-0 me-2">Loading </p>
          <Spinner animation="border" variant="info" role="status" />
        </div>
      ) : (
        <div>
            <div className="d-none d-md-none d-lg-block">
            <PaginatedItems itemsPerPage={10} filteredProviders={filteredProviders} deleteProduct={deleteProduct} />
            </div>
            <div className="d-none d-md-block d-lg-none">
            <PaginatedItems itemsPerPage={7} filteredProviders={filteredProviders} deleteProduct={deleteProduct} />
            </div>
            <div className=" d-block d-md-none d-lg-none">
            <PaginatedItems itemsPerPage={5} filteredProviders={filteredProviders} deleteProduct={deleteProduct} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Providers;
