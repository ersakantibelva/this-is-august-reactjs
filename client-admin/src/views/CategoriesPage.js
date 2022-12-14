import { useNavigate } from "react-router-dom";
import TableCategories from "../components/TableCategories";
import useFetch from "../hooks/useFetch";

export default function CategoriesPage() {
  const navigate = useNavigate()
  const {
    fetched: categories,
    setFetched: setCategories
  } = useFetch('http://localhost:3000/products')

  function goToAddCategories() {
    navigate('/categories/add')
  }

  return (
    <>
    <div className="flex justify-between mb-2">
      <h1 className="font-bold text-2xl mb-4">Categories</h1>

      <button onClick={goToAddCategories} className="btn btn-success btn-sm">+ Add Category</button>
    </div>

      <TableCategories categories={categories} />
    </>
  );
}
