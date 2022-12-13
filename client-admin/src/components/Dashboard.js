import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Products from "./Products";
import Categories from "./Categories";
import FormProducts from "./FormProducts";
import FormCategories from "./FormCategories";
import FormAdmin from "./FormAdmin";
import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";

export default function Dashboard() {
  const {
    fetched: categories,
    setFetched: setCategories,
  } = useFetch('http://localhost:3000/categories')

  const {
    fetched: products,
    setFetched: setProducts
  } = useFetch('http://localhost:3000/products')

  return (
    <>
      <div className="flex w-[1366px] max-h-screen">
        <Sidebar />

        <div className="w-full">
          <Navbar />

          <div className="px-12 my-6">
            <Products products={products} />

            <Categories categories={categories} />

            {/* <FormProducts categories={categories} /> */}

            {/* <FormCategories /> */}

            {/* <FormAdmin /> */}
          </div>
        </div>
      </div>
    </>
  );
}
