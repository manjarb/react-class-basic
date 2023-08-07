import { useRef } from "react";

function RefComponent() {
  // const [counter, setCounter] = useState(0);
  const ref = useRef(0);

  const handleClick = () => {
    ref.current = ref.current + 1;
    console.log('current Value: ', ref.current)
  }

  return <button onClick={handleClick}>Click me!</button>
}

export default RefComponent;