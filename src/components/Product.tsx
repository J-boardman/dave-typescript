import { ProductType } from "../context/ProductsProvider";
import { ReducerActionType, ReducerAction } from "../context/CartProvider";
import { Dispatch, memo, ReactElement } from "react";

type PropsType = {
  product: ProductType,
  dispatch: Dispatch<ReducerAction>,
  REDUCER_ACTIONS: ReducerActionType,
  inCart: boolean
}

const Product = ({ product, dispatch, REDUCER_ACTIONS, inCart }:PropsType): ReactElement => {
  const img: string = new URL(`../images/${product.sku}.jpg`, import.meta.url).href;

  const onAddToCart = () => dispatch({ type: REDUCER_ACTIONS.ADD, payload: { ...product, qty: 1}});

  const itemInCart = inCart ? 'Item in Cart: ✅' : null

  const content = (
    <article className="product">
      <h3>{product.name}</h3>
      <img src={img} alt={product.name} className="product__img"/>
      <p>
        {
          new Intl.NumberFormat("en-Us", { 
            style: 'currency', 
            currency: 'USD' 
          }).format(product.price)
        }
      </p>
      <p>{itemInCart}</p>
      <button onClick={onAddToCart}>Add to Cart</button>
    </article>
  )

  return content
};

const areProductsEqual = ({ product: prevProduct, inCart: prevInCart}: PropsType, { product: nextProduct, inCart: nextInCart}: PropsType) => (
  Object.keys(prevProduct).every(key => (
    prevProduct[key as keyof ProductType] === nextProduct[key as keyof ProductType] 
  )) && prevInCart === nextInCart
)

export default memo<typeof Product>(Product, areProductsEqual);