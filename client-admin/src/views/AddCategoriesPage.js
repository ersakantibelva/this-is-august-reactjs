import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { useState } from "react";
import { addCategory } from "../stores/actions/category/actionCreator";

export default function AddCategoriesPage() {
  const [categoryForm, setCateforyForm] = useState({
    name: ''
  })
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const goToCategoriesPage = () => {
    navigate('/categories')
  }

  function handleChangeInput(e) {
    const { name, value } = e.target
    const newInput = {
      ...categoryForm,
      [name]: value
    }

    setCateforyForm(newInput)
  }

  function handleAddCategory() {
    dispatch(addCategory(categoryForm))

    navigate('/categories')
  }

  return (
    <>
      <h1 className="mb-4 text-2xl font-bold text-center">Add Category</h1>

      <form onSubmit={handleAddCategory} className="flex flex-col">
        <label className="mt-3 mb-1 font-medium">Name</label>
        <input
          name="name"
          value={categoryForm.name}
          onChange={handleChangeInput}
          type="text"
          placeholder="Outer"
          className="input input-bordered"
        />

        <div className="flex gap-2 mt-4">
          <button className="btn btn-info">Submit</button>
          <button onClick={goToCategoriesPage} className="btn btn-error">Cancel</button>
        </div>
      </form>
    </>
  );
}
