export default function Navbar() {
  return (
    <>
      <div className="h-32 flex flex-col">
        <div className="h-10 flex flex-col justify-center border-b-2">
          <h1 className="text-center font-light">
            FREE SHIPPING ALL AROUND INDONESIA
          </h1>
        </div>
        <div className="h-full flex items-center border-b-2">
          <div className="container mx-auto flex items-center">
            <div className="flex gap-6 font-medium bg-white w-full px-4">
              <h1>SHOP</h1>
              <h1>SALE</h1>
              <h1>ABOUT</h1>
              <h1>FLASH SALE</h1>
            </div>
            <div className="w-full font-medium text-4xl">
              <h1>THIS IS AUGUST</h1>
            </div>
            <div className="flex gap-6 font-medium w-full justify-end px-4">
              <h1>CART</h1>
              <h1>ACCOUNT</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
