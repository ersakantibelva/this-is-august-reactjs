import TableRowCategories from "./TableRowCategories";

export default function TableCategories(props) {
  return (
    <>
      <div className="overflow-x-auto overflow-y-auto min-w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              props.categories.map((category, index) => {
                return <TableRowCategories key={index} index={index} category={category} />
              })
            }
          </tbody>
        </table>
      </div>
    </>
  );
}
