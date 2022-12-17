import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../stores/actions/category/actionCreator";
import { fetchProducts } from "../stores/actions/product/actionCreator";

export default function HomePage() {
  const dispatch = useDispatch()
  const { products } = useSelector((state) => state.product)
  const { categories } = useSelector((state) => state.category)

  useEffect(() => {
    dispatch(fetchProducts())
    dispatch(fetchCategories())
  }, [])
  console.log(products);
  return (
    <>
      <div className="flex flex-col items-start">
        <h1 className="text-3xl font-bold mb-10">Dashboard</h1>

        <div className="stats shadow">
          <div className="stat">
            <div className="stat-title">Total Products</div>
            <div className="stat-value text-primary">{products.length}</div>
          </div>
          <div className="stat">
            <div className="stat-title">Total Categories</div>
            <div className="stat-value text-secondary">{categories.length}</div>
          </div>
        </div>
      </div>
    </>
  );
}
