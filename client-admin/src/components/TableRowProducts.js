import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  deleteProduct,
  fetchProducts,
} from "../stores/actions/product/actionCreator";
import { swalConfirmDelete, swalError, swalSuccess } from "../helpers/swal";
import { LOADING_SETLOADER, LOADING_UNSETLOADER } from "../stores/actions/loading/actionTypes";

export default function TableRowProducts(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function goToEditProduct() {
    navigate(`/products/edit/${props.product.id}`);
  }

  async function handleDeleteProduct() {
    try {

      if (!await swalConfirmDelete()) {
       return 
      }
      dispatch({
        type: LOADING_SETLOADER
      })
      await dispatch(deleteProduct(props.product.id))
      await swalSuccess(`Successfully delete product ${props.product.name}`)
    } catch (error) {
      swalError(error.message)
    } finally {
      dispatch(fetchProducts())
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
        <td className="">
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="w-12 h-12 mask mask-squircle">
                <img src={props.product.mainImg} alt="Product" />
              </div>
            </div>
            <div>
              <div className="font-bold">{props.product.name}</div>
              <div className="text-sm font-medium whitespace-pre-wrap">
                {props.product.slug}
              </div>
              <div className="text-sm whitespace-pre-wrap opacity-50">
                {props.product.description}
              </div>
            </div>
          </div>
        </td>
        <td>{props.product.Category.name}</td>
        <td>Rp {props.product.price.toLocaleString("id-ID")},00</td>
        <td>{props.product.User.email}</td>
        <td>
          <Link to={`/products/${props.product.id}`} className="btn btn-primary btn-sm">
            See Images
          </Link>
        </td>
        <th>
          <div className="flex flex-col gap-2">
            <button
              onClick={goToEditProduct}
              className="w-full mr-2 btn btn-warning btn-xs"
            >
              Edit
            </button>
            <button
              onClick={handleDeleteProduct}
              className="w-full btn btn-error btn-xs"
            >
              Delete
            </button>
          </div>
        </th>
      </tr>
    </>
  );
}
