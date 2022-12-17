export default function Loader() {
  return (
    <>
      <div className="fixed top-0 z-20 flex w-full h-screen bg-white opacity-50">
        <img src={require("../images/loader.gif")} className="z-50 mx-auto" />
      </div>
    </>
  );
}
