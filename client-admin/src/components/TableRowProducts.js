import { useNavigate } from "react-router-dom";

export default function TableRowProducts(props) {
  const navigate = useNavigate()
  function goToEditProduct() {
    navigate(`/products/edit/${props.product.id}`)
  }

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
              <div className="w-12 h-12 mask mask-squircle">
                <img
                  src={props.product.mainImg}
                  alt="Product"
                />
              </div>
            </div>
            <div>
              <div className="font-bold">{props.product.name}</div>
              <div className="text-sm font-medium whitespace-pre-wrap">{props.product.slug}</div>
              <div className="text-sm whitespace-pre-wrap opacity-50">{props.product.description}</div>
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
          <button onClick={goToEditProduct} className="mr-2 btn btn-warning btn-xs">Edit</button>
          <button className="btn btn-error btn-xs">Delete</button>

          </div>
          
        </th>
      </tr>
    </>
  );
}
