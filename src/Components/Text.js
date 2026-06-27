import { useCount } from "./UseCountContext"

export function Text() {
    const [count] = useCount()
    return(
        <p>{count}</p>
    )
}