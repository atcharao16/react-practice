import { Text } from "./Text"
import { useCount } from "./UseCountContext"
export function Button() {
    
    const [count, setCount] = useCount()
    const hadnleButton = () => {
        setCount(count => count + 1)
    }
    return (
        <>
            <button  onClick={hadnleButton}>Increase </button>
            <Text />
        </>
    )
}