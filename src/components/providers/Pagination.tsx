import ReactPaginate from "react-paginate";
import { TableRow } from "./TableRow";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

interface Props{
  itemsPerPage: number;
  filteredProviders: string[];
  deleteProduct:React.Dispatch<number>
}

export const PaginatedItems = ({ itemsPerPage, filteredProviders, deleteProduct }:Props) => {
  const navigate = useNavigate();
  const currentPage = parseInt(sessionStorage.getItem("currentPage")||'0');

  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = filteredProviders.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(filteredProviders.length / itemsPerPage);

  const handlePageClick = (event: { selected: number; }) => {
    const newOffset = (event.selected * itemsPerPage) % filteredProviders.length;
    setItemOffset(newOffset);
    sessionStorage.setItem("currentPage", event.selected.toString());
  };

  return (
    <>
      <div className="table-responsive  rounded-3  mt-4 m-0 p-0 border border-1">
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
          <tbody>{TableRow(currentItems, navigate, itemOffset, deleteProduct)}</tbody>
        </table>
      </div>
      <div>
        {pageCount > 0 && (
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
            initialPage={currentPage}
          />
        )}
      </div>
    </>
  );
};
