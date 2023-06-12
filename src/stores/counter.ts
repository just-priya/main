import { useState } from "react"
import { createContainer } from "./context"

const Counter = () => {
    const [count, setCount] = useState(0)

    return {
        count, setCount,
    }
}

const CounterStore = createContainer(Counter);
export default CounterStore
