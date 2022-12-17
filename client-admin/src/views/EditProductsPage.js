import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { fetchCategories } from "../stores/actions/category/actionCreator";
import {
  changeFormAddProduct,
  changeFormEditImage,
  editProduct,
  fetchProductById,
} from "../stores/actions/product/actionCreator";
import EditInputImage from "../components/EditInputImage";
import { swalError, swalSuccess } from "../helpers/swal";
import { LOADING_SETLOADER, LOADING_UNSETLOADER } from "../stores/actions/loading/actionTypes";

export default function EditProductsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { product, Images } = useSelector((state) => state.product);
  const { categories } = useSelector((state) => state.category);

  const goToProductsPage = () => {
    navigate("/products");
  };

  function handleChangeFormProduct(e) {
    const { name, value } = e.target;
    let newInput = {
      ...product,
      Images,
      [name]: value,
    };
    dispatch(changeFormAddProduct(newInput));
  }

  async function handleSubmitProductForm(e) {
    try {
      dispatch({
        type: LOADING_SETLOADER
      })

      e.preventDefault();
      const newInput = {
        ...product,
        Images,
        slug: product.name.replaceAll(" ", "-").replace("---", "-"),
      };

      await dispatch(editProduct(id, newInput))
      await swalSuccess('Successfully to edit product')
      navigate("/products");
    } catch (error) {
      swalError(error.message)
    } finally {
      dispatch({
        type: LOADING_UNSETLOADER
      })
    }
  }

  useEffect(() => {
    dispatch({
      type: LOADING_SETLOADER
    })

    dispatch(fetchCategories())
    .then(() => {
      return dispatch(fetchProductById(id));
    })
    .catch((error) => {
      swalError(error.message)
    })
    .finally(() => {
      dispatch({
        type: LOADING_UNSETLOADER
      })
    })
  }, []);


  function addImageInput() {
    const newInput = [
      ...Images,
      {
        productId: Number(id),
        imgUrl: ""
      }
    ]

    dispatch(changeFormEditImage(newInput))
  }
  
  return (
    <>
      <h1 className="mb-4 text-2xl font-bold text-center">Edit Product</h1>

      <form onSubmit={handleSubmitProductForm} className="flex flex-col w-full">
        <label className="mt-3 mb-1 font-medium">Name</label>
        <input
          onChange={handleChangeFormProduct}
          name="name"
          value={product.name}
          type="text"
          placeholder="Shirt - 18023"
          className="w-full input input-bordered input-sm"
        />

        <label className="mt-3 mb-1 font-medium">Description</label>
        <textarea
          onChange={handleChangeFormProduct}
          name="description"
          value={product.description}
          className="textarea textarea-bordered"
          placeholder="Put the description here"
        ></textarea>

        <div className="grid grid-cols-2 gap-3">
          <div className="flex flex-col">
            <label className="mt-3 mb-1 font-medium">Price</label>
            <input
              onChange={handleChangeFormProduct}
              name="price"
              value={product.price}
              type="number"
              placeholder="200000"
              className="w-full input input-bordered input-sm"
            />
          </div>

          <div className="flex flex-col">
            <label className="mt-3 mb-1 font-medium">Category</label>
            <select
              name="categoryId"
              onChange={handleChangeFormProduct}
              value={product.categoryId}
              className="w-full select select-bordered select-sm"
            >
              <option value="">Select Category</option>
              {categories.map((category, index) => {
                return (
                  <option key={index} value={category.id}>
                    {category.name}
                  </option>
                );
              })}
            </select>
          </div>
        </div>

        <label className="mt-3 mb-1 font-medium">Main Image</label>
        <div className="flex gap-3">
          <input
            name="mainImg"
            onChange={handleChangeFormProduct}
            value={product.mainImg}
            type="text"
            placeholder="www.image.com"
            className="w-full input input-bordered input-sm"
          />
        </div>

        {Images.length > 0 && (
          <label className="mt-3 mb-1 font-medium">Additional Images</label>
        )}

        {Images.length > 0 &&
          Images.map((el, index) => {
            return <EditInputImage key={index} index={index} Images={Images} />;
          })}

        <div className="flex justify-between gap-2 mt-4">
          <div>
            <button
              type="button"
              onClick={addImageInput}
              className="btn btn-success"
            >
              Add Images
            </button>
          </div>

          <div className="flex gap-2">
            <button type="submit" className="btn btn-info">
              Submit
            </button>
            <button onClick={goToProductsPage} className="btn btn-error">
              Cancel
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
