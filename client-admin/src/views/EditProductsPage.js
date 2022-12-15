import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { fetchCategories } from "../stores/actions/category/actionCreator";
import { changeFormAddProduct, fetchProductById } from "../stores/actions/product/actionCreator";

export default function EditProductsPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { product } = useSelector((state) => state.product)
  const { categories } = useSelector((state) => state.category)
  
  const goToProductsPage = () => {
    navigate('/products')
  }

  function handleChangeFormProduct(e) {
    const { name, value } = e.target
    let newInput = {
      ...product,
      [name]: value
    }
    
    dispatch(changeFormAddProduct(newInput))
  }

  async function handleSubmitProductForm(e) {
    try {
      e.preventDefault()
      const newInput = {
        ...product,
        slug: product.name.replaceAll(' ', '-').replace('---', '-')
      }
      
      dispatch(changeFormAddProduct(newInput))
  
      const response = await fetch(`http://localhost:3000/products/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newInput)
      })
      
      const data = response.json()
      navigate('/products')
    } catch (error) {
      console.log(error)
    }
  }

  useEffect( () => {
    dispatch(fetchCategories())
    dispatch(fetchProductById(id))
  }, [])

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
              className="w-full select select-bordered select-sm">
              <option value=''>Select Category</option>
              {
                categories.map((category, index) => {
                  return (
                    <option key={index} value={category.id}>{category.name}</option>
                  )
                })
              }
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
        <button className="btn btn-success btn-sm">Add Images</button>
        </div>

        <div className="flex gap-2 mt-4">
        <button type="submit" className="btn btn-info">Submit</button>
        <button onClick={goToProductsPage} className="btn btn-error">Cancel</button>
        </div>
      </form>
    </>
  );
}