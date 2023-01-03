import { CounterProvider, initState } from './context/CounterContext'
import Counter from './Counter'

function App() {

  return (
    <CounterProvider count={initState.count} text={initState.text}>
      <Counter>{(num: number) => <>Current Count: {num}</>}</Counter>
    </CounterProvider>
  )
}

export default App
