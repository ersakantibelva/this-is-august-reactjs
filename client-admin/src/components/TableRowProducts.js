export default function TableRowProducts(props) {
  return (
    <>
      <tr>
        <td>
          <div>
            {props.index + 1}
          </div>
        </td>
        <td className="">
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img
                  src={props.product.mainImg}
                  alt="Product"
                />
              </div>
            </div>
            <div>
              <div className="font-bold">{props.product.name}</div>
              <div className="text-sm font-medium whitespace-pre-wrap">{props.product.slug}</div>
              <div className="text-sm opacity-50 whitespace-pre-wrap">{props.product.description}</div>
            </div>
          </div>
        </td>
        <td>
          {props.product.categoryId}
        </td>
        <td>Rp {props.product.price.toLocaleString('id-ID')},00</td>
        <td>{props.product.authorId}</td>
        <td>
        <button className="btn btn-primary btn-sm">See Images</button>
        </td>
        <th>
          <div className="flex flex-col gap-2">
          <button className="btn btn-warning btn-xs mr-2">Edit</button>
          <button className="btn btn-error btn-xs">Delete</button>

          </div>
          
        </th>
      </tr>
    </>
  );
}
