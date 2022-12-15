export default function Footer() {
  return (
    <>
      <div className="flex flex-col h-80">
        <div className="h-3/4">
          <div className="container flex mx-auto h-full">
            <div className="w-1/2 text-left flex justify-between">
              <div className="w-1/2">
                <h1 className="font-bold mb-2">INFORMATIONS</h1>
                <h2 className="">Payment Method</h2>
                <h2 className="">Shipping</h2>
                <h2 className="">Exchange</h2>
                <h2 className="">FAQ</h2>
                <h2 className="">How to Order</h2>
                <h2 className="">Legal</h2>
              </div>
              <div className="flex flex-col w-1/2 font-bold gap-2">
                <h1>PAYMENT CONFIRMATION</h1>
                <h1>CONTACT US</h1>
                <h1>CAREERS</h1>
              </div>
            </div>

            <div className="w-1/2 flex flex-col">
              <h1 className="font-bold text-left mb-4">NEWS LETTER</h1>
              <input
              className="w-full h-10 p-2 mb-2 text-gray-700 border border-black outline-black"
              plasceholder="Your email please"
              />
              <button
              className="w-full bg-gray-400 text-white h-10 font-bold"
              >
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>
        <div className="h-1/4 bg-black text-white">
          <div className="container py-2 text-left items-center mx-auto h-full flex px-6 justify-between">
            <h1 className="text-3xl w-1/2">THIS IS AUGUST</h1>
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
