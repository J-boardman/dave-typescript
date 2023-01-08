import { Dispatch, SetStateAction } from "react";

type PropsType = {
  viewCart: boolean,
  setViewCart: Dispatch<SetStateAction<boolean>>
}

export default ({ viewCart, setViewCart }: PropsType) => {
  const button = viewCart
    ? <button onClick={() => setViewCart(false)}>View Products</button>
    : <button onClick={() => setViewCart(true)}>View Cart</button>

  const content = (
    <nav className="nav">
      {button}
    </nav>
  )
  
  return content;
}