import moment from "moment";
import { Link } from "react-router-dom";
import HandledeleteProvider from "./HandledeleteProvider";

export const TableRow = (currentItems, navigate, itemOffset, deleteProduct) =>
  currentItems.map((provide) => (
    <tr key={provide.id}>
      <td>{++itemOffset}</td>
      <td>{provide.id}</td>
      <td
        className="text-start on-hover"
        onClick={() => {
          navigate(`/Providers/ProviderProfile/${provide.id}`);
        }}>
        {provide.title}
      </td>
      <td>{provide.price}</td>
      <td type="date">{moment.utc(provide.updatedAt).local().format("DD-MM-YYYY, HH:MM A ")}</td>

      <td className=" Action text-nowrap z-0">
        <Link to={`/Providers/EditProviders/${provide.id}`} className="bxs--edit outline-none me-2  bg-transparent"></Link>
        <button
          className="material-symbols--delete-outline border-0 outline-none ms-2 bg-transparent"
          onClick={() => {
            HandledeleteProvider(provide.id, deleteProduct);
          }}></button>
      </td>
    </tr>
  ));
