export default function TableRowCategories(props) {
  return (
    <>
      <tr>
        <td>
          <div>{props.index + 1}</div>
        </td>
        <td>
          <div className="font-bold">{props.category.name}</div>
        </td>
        <th>
          <button className="btn btn-warning btn-xs mr-2">Edit</button>
          <button className="btn btn-error btn-xs">Delete</button>
        </th>
      </tr>
    </>
  );
}
