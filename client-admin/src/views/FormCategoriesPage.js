import { useNavigate } from "react-router-dom";

export default function FormCategoriesPage() {
  const navigate = useNavigate()

  const goToCategoriesPage = () => {
    navigate('/categories')
  }
  return (
    <>
      <h1 className="font-bold text-2xl mb-4 text-center">Add Category</h1>

      <form className="flex flex-col">
        <label className="font-medium mb-1 mt-3">Name</label>
        <input
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
