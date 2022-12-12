import TableProducts from "./TableProducts";

export default function Products(props) {
  return (
    <>
      <div className="flex justify-between mb-2">
        <h1 className="font-bold text-2xl mb-4">Products</h1>
        <button className="btn btn-success btn-sm">+ Add Product</button>
      </div>

      <TableProducts products={props.products} />
    </>
  );
}
