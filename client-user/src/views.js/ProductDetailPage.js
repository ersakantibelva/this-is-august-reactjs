import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProduct } from "../store/actions/product/actionCreator";
import { LOADING_SETLOADING, LOADING_UNSETLOADING } from "../store/actions/product/actionType";

export default function ProductDetailPage() {
  const { slug } = useParams();
  const dispatch = useDispatch();
  const { product } = useSelector((state) => state);

  useEffect(() => {
    dispatch({
      type: LOADING_SETLOADING
    })
    dispatch(fetchProduct(slug))
    .finally(() => {
      dispatch({
        type: LOADING_UNSETLOADING
      })
    })
  }, []);

  if (product.name) {
    return (
      <>
        <div className="container flex h-full gap-6 mx-auto my-4">
          <div className="w-1/2">
            <img src={product.mainImg} />
          </div>
          <div className="w-1/2 text-left">
            <p className="mt-4 text-2xl">{product.name}</p>
            <p className="mt-1 text-lg font-bold">
              {product.Category.name} | Rp{product.price.toLocaleString("id-ID")},00
            </p>
            <div className="p-4 mx-auto my-4 text-xl font-medium text-center border border-gray-300 cursor-pointer h-fit w-fit">
              Add to cart
            </div>

            <div className="font-bold">Desciption</div>
            <div className="whitespace-pre-wrap">{product.description}</div>
            <div className="my-4 font-bold">Other images:</div>
            <div className="grid grid-cols-3 gap-2">
              {product.Images.map((el, index) => {
              return (
                <>
                  <div key={index} className="w-full">
                    <img src={el.imgUrl} />
                  </div>
                </>
              );
            })}
            </div>
          </div>
        </div>
      </>
    );
  }
}
