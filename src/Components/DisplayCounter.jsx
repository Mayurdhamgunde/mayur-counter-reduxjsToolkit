import { useSelector } from "react-redux";

const DisplayCounter = () => {
  const { counterVal } = useSelector((store) => store.counter);

  return (
    <p className="fw-bolder lh-lg fs-3 mb-4">
      Counter current value {counterVal}
    </p>
  );
};

export default DisplayCounter;
