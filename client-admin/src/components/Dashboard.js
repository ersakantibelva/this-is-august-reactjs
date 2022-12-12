import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
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
      <div className="flex">
          <Sidebar />
        <div className="w-full">
          <Navbar />
        </div>
      </div>
    </>
  );
}
