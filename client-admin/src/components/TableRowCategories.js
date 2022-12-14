import { useNavigate } from "react-router-dom";

export default function TableRowCategories(props) {
  const navigate = useNavigate()

  function goToEditCategoryForm() {
    navigate(`/categories/edit/${props.category.id}`)
  }

  return (
    <>
      <tr>
        <td>
          <div>{props.index + 1}</div>
        </td>
        <td>
          <div className="font-bold">{props.category.name}</div>
        </td>
        <th>
          <button onClick={goToEditCategoryForm} className="mr-2 btn btn-warning btn-xs">Edit</button>
          <button className="btn btn-error btn-xs">Delete</button>
        </th>
      </tr>
    </>
  );
}
