import { useDispatch } from "react-redux";
import { PRODUCT_CHANGEFORMEDITIMAGE } from "../stores/actions/product/actionTypes";

export default function EditInputImage(props) {
  const dispatch = useDispatch()
  function handleChangeImage(e) {
    const { value } = e.target
    const newInput = [
      ...props.Images
    ]
    newInput[props.index].imgUrl = value

    dispatch({
      type: PRODUCT_CHANGEFORMEDITIMAGE,
      payload: newInput
    })
  }

  function handleDeleteImage() {
    const newInput = [
      ...props.Images
    ]
    .filter((el, idx) => idx != props.index)

    dispatch({
      type: PRODUCT_CHANGEFORMEDITIMAGE,
      payload: newInput
    })
  }
  
  return (
    <>
      <div className="flex items-center gap-3">
        <input
          name="Images"
          onChange={handleChangeImage}
          value={props.Images[props.index].imgUrl}
          type="text"
          placeholder="www.image.com"
          className="w-full mt-2 input input-bordered input-sm"
        />
        <p onClick={handleDeleteImage} className="link link-error">
          Remove
        </p>
      </div>
    </>
  );
}