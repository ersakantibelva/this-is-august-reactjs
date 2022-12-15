import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { fetchCategories } from '../stores/actions/category/actionCreator'
import { addProduct } from "../stores/actions/product/actionCreator";

export default function AddProductsPage() {
  const navigate = useNavigate()
  const { categories } = useSelector((state) => state.category)
  const dispatch = useDispatch()
  
  const [productForm, setProductForm] = useState({
    name: '',
    slug: '',
    description: '',
    price: '',
    categoryId: '',
    mainImg: ''
  })

  const goToProductsPage = () => {
    navigate('/products')
  }

  function handleChangeFormProduct(e) {
    const { name, value } = e.target
    let newInput = {
      ...productForm,
      [name]: value
    }
    
    setProductForm(newInput)
  }

  useEffect(() => {
    dispatch(fetchCategories())
  }, [])

  async function handleSubmitProductForm(e) {
    try {
      e.preventDefault()
      const newInput = {
        ...productForm,
        slug: productForm.name.replaceAll(' ', '-').replace('---', '-')
      }
      
      setProductForm(newInput)
      dispatch(addProduct(newInput))
      
      navigate('/products')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <h1 className="mb-4 text-2xl font-bold text-center">Add Product</h1>

      <form onSubmit={handleSubmitProductForm} className="flex flex-col w-full">
        <label className="mt-3 mb-1 font-medium">Name</label>
        <input
          onChange={handleChangeFormProduct}
          name="name"
          value={productForm.name}
          type="text"
          placeholder="Shirt - 18023"
          className="w-full input input-bordered input-sm"
        />

        <label className="mt-3 mb-1 font-medium">Description</label>
        <textarea
          onChange={handleChangeFormProduct}
          name="description"
          value={productForm.description}
          className="textarea textarea-bordered"
          placeholder="Put the description here"
        ></textarea>

        <div className="grid grid-cols-2 gap-3">
          <div className="flex flex-col">
            <label className="mt-3 mb-1 font-medium">Price</label>
            <input
              onChange={handleChangeFormProduct}
              name="price"
              value={productForm.price}
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
              value={productForm.categoryId}
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
          value={productForm.mainImg}
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
