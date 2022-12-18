import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className="flex flex-col h-32">
        <div className="flex flex-col justify-center h-10 border-b-2">
          <h1 className="font-light text-center">
            FREE SHIPPING ALL AROUND INDONESIA
          </h1>
        </div>
        <div className="flex items-center h-full border-b-2">
          <div className="container flex items-center mx-auto">
            <div className="flex w-full gap-6 px-4 font-medium bg-white">
              <h1>SHOP</h1>
              <h1>SALE</h1>
              <h1>ABOUT</h1>
              <h1>FLASH SALE</h1>
            </div>
            <div className="w-full text-4xl font-medium">
              <Link to="/">THIS IS AUGUST</Link>
            </div>
            <div className="flex justify-end w-full gap-6 px-4 font-medium">
              <h1>CART</h1>
              <h1>ACCOUNT</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
