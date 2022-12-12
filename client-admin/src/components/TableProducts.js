import TableRowProducts from "./TableRowProducts";

export default function TableProducts(props) {
  return (
    <>
      <div className="overflow-x-auto overflow-y-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>No</th>
              <th>Name, Slug, & Description</th>
              <th>Category</th>
              <th>Price</th>
              <th>Created By</th>
              <th>Images</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              props.products.map((product, index) => {
                return <TableRowProducts key={index} index={index} product={product} />
              })
            }
          </tbody>
        </table>
      </div>
    </>
  );
}
