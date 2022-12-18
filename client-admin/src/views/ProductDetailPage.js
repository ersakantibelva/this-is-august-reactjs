import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { swalError } from '../helpers/swal'
import { LOADING_SETLOADER, LOADING_UNSETLOADER } from "../stores/actions/loading/actionTypes";
import { fetchProductById } from "../stores/actions/product/actionCreator";

export default function ProductDetailPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { product, Images } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch({
      type: LOADING_SETLOADER
    })
    dispatch(fetchProductById(id))
    .catch((err) => {
      swalError(err.message)
    })
    .finally(() => {
      dispatch({
        type: LOADING_UNSETLOADER
      })
    })
  }, []);

  return (
    <>
      <div className="flex flex-col">
        <div className="mb-5">
          <Link to="/products" className="btn btn-warning">Back to Product List</Link>
        </div>

        <h1 className="mb-6 text-3xl font-bold">Product Images</h1>
        <h1 className="mb-2 text-xl font-medium">{product.name}</h1>
        <div className="flex flex-wrap gap-2">
        <img src={product.mainImg} width="200"/>
        {
          Images.map(el => {
            return (
              <img src={el.imgUrl} width="200"/>
            )
          })
        }
        </div>
      </div>
    </>
  );
}
