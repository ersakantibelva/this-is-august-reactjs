import { useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import TableProducts from "../components/TableProducts";

export default function ProductsPage() {
  const navigate = useNavigate()
  const {
    fetched: products,
    setFetched: setProducts
  } = useFetch('http://localhost:3000/products')

  function goToAddProducts() {
    navigate('/products/add')
  }

  return (
    <>
      <div className="flex justify-between mb-2">
        <h1 className="font-bold text-2xl mb-4">Products</h1>
        <button onClick={goToAddProducts} className="btn btn-success btn-sm">+ Add Product</button>
      </div>

      <TableProducts products={products} />
    </>
  );
}
