import TableCategories from "./TableCategories";

export default function Categories(props) {
  return (
    <>
      <h1 className="font-bold text-2xl mb-4">Categories</h1>

      <TableCategories categories={props.categories} />
    </>
  );
}
