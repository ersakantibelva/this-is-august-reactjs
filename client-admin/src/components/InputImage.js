export default function InputImage(props) {
  function deleteImageInput(e) {
    props.setCountImg(props.countImg - 1);
  }

  function handleChangeImageInput(e) {
    const { value } = e.target
    const newInput = [
      ...props.imageInput
    ]
    newInput[props.index].imgUrl = value
    props.setImageInput(newInput)
  }
  
  return (
    <>
      <div className="flex items-center gap-3">
        <input
          name="images"
          onChange={handleChangeImageInput}
          value={props.imageInput[props.index].imgUrl}
          type="text"
          placeholder="www.image.com"
          className="w-full mt-2 input input-bordered input-sm"
        />
        <p onClick={deleteImageInput} className="link link-error">
          Remove
        </p>
      </div>
    </>
  );
}