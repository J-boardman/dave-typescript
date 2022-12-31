import { ChangeEvent, ReactNode, useReducer } from "react";

const initState = { count: 0, text: "" }

const enum REDUCTER_ACTION_TYPE { INCREMENT, DECREMENT, NEW_INPUT }

type ReducerAction = {
  type: REDUCTER_ACTION_TYPE,
  payload?: string
}

const reducer = (state: typeof initState, action: ReducerAction): typeof initState => {
  switch(action.type){
    case REDUCTER_ACTION_TYPE.INCREMENT:
      return { ...state, count: state.count + 1 }
    case REDUCTER_ACTION_TYPE.DECREMENT:
      return { ...state, count: state.count - 1 }
    case REDUCTER_ACTION_TYPE.NEW_INPUT:
      return { ...state, text: action.payload ?? '' }
    default: throw new Error()
  }
}

type ChildrenType = {
  children: (num: number) => ReactNode
}

export default ({children}: ChildrenType) => {
  // const [count, setCount] = useState<number>(1)

  const [state, dispatch] = useReducer(reducer, initState);

  const increment = () => dispatch({ type: REDUCTER_ACTION_TYPE.INCREMENT})
  const decrement = () => dispatch({ type: REDUCTER_ACTION_TYPE.DECREMENT})
  const handleTextInput = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({ 
      type: REDUCTER_ACTION_TYPE.NEW_INPUT,
      payload: e.target.value
    })
  }
  
  return (
    <>
      <h1>{children(state.count)}</h1>
      <div>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </div>
      <input type="text" onChange={handleTextInput}/>
      <h2>{state.text}</h2>
    </>
  )
};