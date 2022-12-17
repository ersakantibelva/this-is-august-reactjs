import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { useState } from "react";
import { addCategory } from "../stores/actions/category/actionCreator";
import { swalError, swalSuccess } from "../helpers/swal";
import { LOADING_SETLOADER, LOADING_UNSETLOADER } from "../stores/actions/loading/actionTypes";

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

   async function handleAddCategory(e) {
    try {
      dispatch({
        type: LOADING_SETLOADER
      })

      e.preventDefault()
      await dispatch(addCategory(categoryForm))
      await swalSuccess('Successfully to add category')
      navigate('/categories')
    } catch (error) {
      await swalError(error.message)
    } finally {
      dispatch({
        type: LOADING_UNSETLOADER
      })
    }
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
          <button type="submit" className="btn btn-info">Submit</button>
          <button onClick={goToCategoriesPage} className="btn btn-error">Cancel</button>
        </div>
      </form>
    </>
  );
}
