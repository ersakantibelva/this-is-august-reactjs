import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteCategory, fetchCategories } from "../stores/actions/category/actionCreator";

export default function TableRowCategories(props) {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  function goToEditCategoryForm() {
    navigate(`/categories/edit/${props.category.id}`)
  }

  function handleDeleteCategory() {
    dispatch(deleteCategory(props.category.id))
    .then(() => {
      return dispatch(fetchCategories())
    })
    .then(() => {
      navigate('/categories')
    })
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
          <button onClick={handleDeleteCategory} className="btn btn-error btn-xs">Delete</button>
        </th>
      </tr>
    </>
  );
}
