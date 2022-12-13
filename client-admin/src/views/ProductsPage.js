import useFetch from "../hooks/useFetch";
import TableProducts from "../components/TableProducts";

export default function ProductsPage() {
  const {
    fetched: products,
    setFetched: setProducts
  } = useFetch('http://localhost:3000/products')

  return (
    <>
      <div className="flex justify-between mb-2">
        <h1 className="font-bold text-2xl mb-4">Products</h1>
        <button className="btn btn-success btn-sm">+ Add Product</button>
      </div>

      <TableProducts products={products} />
    </>
  );
}
