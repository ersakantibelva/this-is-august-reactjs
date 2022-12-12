import TableProducts from "./TableProducts";

export default function Products(props) {
  return (
    <>
      <h1 className="font-bold text-2xl mb-4">Products</h1>

      <TableProducts products={props.products} />
    </>
  );
}
