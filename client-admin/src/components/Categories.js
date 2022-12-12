import TableCategories from "./TableCategories";

export default function Categories(props) {
  return (
    <>
    <div className="flex justify-between mb-2">
      <h1 className="font-bold text-2xl mb-4">Categories</h1>

      <button className="btn btn-success btn-sm">+ Add Category</button>
    </div>

      <TableCategories categories={props.categories} />
    </>
  );
}
