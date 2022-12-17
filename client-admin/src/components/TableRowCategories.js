import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { swalConfirmDelete, swalError, swalSuccess } from "../helpers/swal";
import { deleteCategory, fetchCategories } from "../stores/actions/category/actionCreator";
import { LOADING_SETLOADER, LOADING_UNSETLOADER } from "../stores/actions/loading/actionTypes";

export default function TableRowCategories(props) {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  function goToEditCategoryForm() {
    navigate(`/categories/edit/${props.category.id}`)
  }

  async function handleDeleteCategory() {
    try {
      if (!await swalConfirmDelete()) {
        return 
      }
      dispatch({
        type: LOADING_SETLOADER
      })
      await dispatch(deleteCategory(props.category.id))
      
      await swalSuccess(`Successfully delete category ${props.category.name}`)
    } catch (error) {
      swalError(error.message)
    } finally {
      await dispatch(fetchCategories())
      .catch((err) => {
        swalError(err.message)
      })
      .finally(() => {
        dispatch({
          type: LOADING_UNSETLOADER
        })
      })
    }
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
