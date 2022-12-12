import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import TableProducts from "./TableProducts";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [categories, setCategories] = useState([])
  const [products, setProducts] = useState([])

  const fetchCategories = () => {
    fetch('http://localhost:3000/categories')
    .then(res => res.json())
    .then(data => {
      setCategories(data)
    })
  }

  const fetchProducts = () => {
    fetch('http://localhost:3000/products')
    .then(res => res.json())
    .then(data => {
      setProducts(data)
    })
  }
  
  useEffect(() => {
    fetchCategories()
    fetchProducts()
  }, [])

  return (
    <>
      <div className="flex max-w-screen max-h-screen">

          <Sidebar />

        <div className="w-full">

          <Navbar />

          <div className="mx-20 my-6">

          <h1 className="font-bold text-2xl mb-4">Products</h1>

          <TableProducts
            products={products}
          />

          </div>
        </div>

      </div>
    </>
  );
}
