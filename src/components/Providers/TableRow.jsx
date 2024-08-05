import moment from "moment";
import { Link } from "react-router-dom";
import { handleDelete } from "./HandledeleteProvider";

export const TableRow = (filteredProviders, navigate, setProviders) =>
  filteredProviders.map((provide) => (
    <tr key={provide.id}>
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

      <td className=" Action text-nowrap z-0">
        <Link to={`/Providers/EditProviders/${provide.id}`} className="bxs--edit border-0 outline-none me-2"></Link>
        <button
          className="material-symbols--delete-outline border-0 outline-none ms-2"
          onClick={() => {
            handleDelete(provide.id, setProviders, filteredProviders);
          }}></button>
      </td>
    </tr>
  ));
