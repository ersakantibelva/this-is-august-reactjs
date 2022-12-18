export default function Footer() {
  return (
    <>
      <div className="flex flex-col h-80">
        <div className="h-3/4">
          <div className="container flex h-full mx-auto">
            <div className="flex justify-between w-1/2 text-left">
              <div className="w-1/2">
                <h1 className="mb-2 font-bold">INFORMATIONS</h1>
                <h2 className="">Payment Method</h2>
                <h2 className="">Shipping</h2>
                <h2 className="">Exchange</h2>
                <h2 className="">FAQ</h2>
                <h2 className="">How to Order</h2>
                <h2 className="">Legal</h2>
              </div>
              <div className="flex flex-col w-1/2 gap-2 font-bold">
                <h1>PAYMENT CONFIRMATION</h1>
                <h1>CONTACT US</h1>
                <h1>CAREERS</h1>
              </div>
            </div>

            <div className="flex flex-col w-1/2">
              <h1 className="mb-4 font-bold text-left">NEWS LETTER</h1>
              <input
              className="w-full h-10 p-2 mb-2 text-gray-700 border border-black outline-black"
              plasceholder="Your email please"
              />
              <button
              className="w-full h-10 font-bold text-white bg-gray-400"
              >
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>
        <div className="text-white bg-black h-1/4">
          <div className="container flex items-center justify-between h-full px-6 py-2 mx-auto text-left">
            <h1 className="w-1/2 text-3xl">THIS IS AUGUST</h1>
            <div className="w-1/2">
              <h1>TERMS AND CONDITIONS PRIVACY POLICY</h1>
              <h1>@Copyright 2022 This is August. All right reserved.</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
