export default function FormProducts(props) {
  return (
    <>
      <h1 className="font-bold text-2xl mb-4 text-center">Add Product</h1>

      <form className="flex flex-col w-full">
        <label className="font-medium mb-1 mt-3">Name</label>
        <input
          type="text"
          placeholder="Shirt - 18023"
          className="input input-bordered w-full input-sm"
        />

        <label className="font-medium mb-1 mt-3">Slug</label>
        <input
          type="text"
          placeholder="shirt-18023"
          className="input input-bordered w-full input-sm"
        />

        <label className="font-medium mb-1 mt-3">Description</label>
        <textarea
          className="textarea textarea-bordered"
          placeholder="Put the description here"
        ></textarea>

        <div className="grid grid-cols-2 gap-3">
          <div className="flex flex-col">
            <label className="font-medium mb-1 mt-3">Price</label>
            <input
              type="number"
              placeholder="200000"
              className="input input-bordered w-full input-sm"
            />
          </div>

          <div className="flex flex-col">
            <label className="font-medium mb-1 mt-3">Category</label>
            <select className="select select-bordered w-full select-sm">
              <option disabled selected>
                Choose Category
              </option>
              {
                props.categories.map((category, index) => {
                  return (
                    <option>{category.name}</option>
                  )
                })
              }
            </select>
          </div>
        </div>

        <label className="font-medium mb-1 mt-3">Main Image</label>
        <div className="flex gap-3">
        <input
          type="text"
          placeholder="www.image.com"
          className="input input-bordered w-full input-sm"
        />
        <button className="btn btn-success btn-sm">Add Images</button>
        </div>

        <div className="flex gap-2 mt-4">
        <button className="btn btn-info">Submit</button>
        <button className="btn btn-error">Cancel</button>
        </div>
      </form>
    </>
  );
}
