import TableCategories from "../components/TableCategories";
import useFetch from "../hooks/useFetch";

export default function CategoriesPage() {
  const {
    fetched: categories,
    setFetched: setCategories
  } = useFetch('http://localhost:3000/products')

  return (
    <>
    <div className="flex justify-between mb-2">
      <h1 className="font-bold text-2xl mb-4">Categories</h1>

      <button className="btn btn-success btn-sm">+ Add Category</button>
    </div>

      <TableCategories categories={categories} />
    </>
  );
}
