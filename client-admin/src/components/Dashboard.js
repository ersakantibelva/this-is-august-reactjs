import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Products from "./Products";
import Categories from "./Categories";
import FormProducts from "./FormProducts";
import FormCategories from "./FormCategories";
import FormAdmin from "./FormAdmin";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  const fetchCategories = () => {
    fetch("http://localhost:3000/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      });
  };

  const fetchProducts = () => {
    fetch("http://localhost:3000/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  };

  useEffect(() => {
    fetchCategories();
    fetchProducts();
  }, []);

  return (
    <>
      <div className="flex max-w-screen max-h-screen">
        <Sidebar />

        <div className="w-full">
          <Navbar />

          <div className="mx-20 my-6">
            {/* <Products products={products} /> */}

            {/* <Categories categories={categories} /> */}

            {/* <FormProducts categories={categories} /> */}

            {/* <FormCategories /> */}

            <FormAdmin />
          </div>
        </div>
      </div>
    </>
  );
}
