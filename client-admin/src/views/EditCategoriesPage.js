import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from "react";
import { changeFormEditCategory, editCategory, fetchCategoryById } from "../stores/actions/category/actionCreator";

export default function AddCategoriesPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { category } = useSelector((state) => state.category)

  const goToCategoriesPage = () => {
    navigate('/categories')
  }

  function handleChangeInput(e) {
    const { name, value } = e.target
    const newInput = {
      ...category,
      [name]: value
    }

    dispatch(changeFormEditCategory(newInput))
  }

  function handleSubmitEditCategory(e) {
    try {
      e.preventDefault()
      dispatch(editCategory(id, category))
      
      navigate('/categories')
    } catch (error) {
      
    }
  }
  
  useEffect(() => {
    dispatch(fetchCategoryById(id))
  }, [])
  console.log(category);

  return (
    <>
      <h1 className="mb-4 text-2xl font-bold text-center">Edit Category</h1>

      <form onSubmit={handleSubmitEditCategory} className="flex flex-col">
        <label className="mt-3 mb-1 font-medium">Name</label>
        <input
          name="name"
          value={category.name}
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
