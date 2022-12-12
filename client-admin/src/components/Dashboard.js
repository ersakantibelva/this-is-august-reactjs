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
    setProducts(
      [
        {
          "id": 1,
          "name": "JM Claudine Knit Cut Out Black Top - 182485",
          "slug": "jm-claudine-knit-cut-out-black-top-182485",
          "description": "Hit refresh on your weekend wardrobe with this Claudine top. Made from soft knit fabric that is comfortable to wear and easy to care for. Simply style it with a pair of denim jeans, culottes or skirt.",
          "price": 191200,
          "mainImg": "https://i0.wp.com/thisisapril.com/wp-content/uploads/2022/12/Lookbook-18-1.jpg?fit=1537%2C1920&ssl=1",
          "categoryId": "Tops",
          "authorId": "user1@mail.com"
        },
        {
          "id": 2,
          "name": "Stefan Relaxed Denim Shirt - 182700",
          "slug": "stefan-relaxed-denim-shirt-182700",
          "description": "Elevate your outfit of the day with this Stefan shirt. Featuring a denim material with short sleeves and a button front design. Pair with the matching bottoms and your go-to accessories for a chic, off-duty vibe.",
          "price": 223200,
          "mainImg": "https://i0.wp.com/thisisapril.com/wp-content/uploads/2022/11/Lookbook-95.jpg?fit=1536%2C1920&ssl=1",
          "categoryId": "Tops",
          "authorId": "user2@mail.com"
        },
        {
          "id": 3,
          "name": "Henri Straight Leg Light Denim Pants - 282809",
          "slug": "henri-straight-leg-light-denim-pants-282809",
          "description": "The fashion item that will save you time when dressing up. Simply put these on and style with practically anything and you’re set. Made to be worn everywhere, every day.",
          "price": 231200,
          "mainImg": "https://i0.wp.com/thisisapril.com/wp-content/uploads/2022/11/282809-4-1.jpg?fit=1536%2C1920&ssl=1",
          "categoryId": "Bottoms",
          "authorId": "user1@mail.com"
        },
        {
          "id": 4,
          "name": "Aila Suede A line Black Skirt - 280700",
          "slug": "aila-suede-a-line-black-skirt-280700",
          "description": "Your new go-to skirt for days when you don’t know what to wear. This skirt can be dressed up and down for any occasion. Add blouse and heels for dinner date or tuck in a tee and team with trainers for a casual weekend look.",
          "price": 191200,
          "mainImg": "https://i0.wp.com/thisisapril.com/wp-content/uploads/2022/10/280700-4-scaled.jpg?fit=2048%2C2560&ssl=1",
          "categoryId": "Bottoms",
          "authorId": "user2@mail.com"
        }
      ]
    )
    // fetchProducts();
  }, []);

  return (
    <>
      <div className="flex w-[1366px] max-h-screen">
        <Sidebar />

        <div className="w-full">
          <Navbar />

          <div className="px-12 my-6">
            <Products products={products} />

            {/* <Categories categories={categories} /> */}

            {/* <FormProducts categories={categories} /> */}

            {/* <FormCategories /> */}

            {/* <FormAdmin /> */}
          </div>
        </div>
      </div>
    </>
  );
}
