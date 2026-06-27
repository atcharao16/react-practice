import { useSelector, useDispatch } from 'react-redux'
import {increment, decrement} from './slices/counterslice'
export const Counter = () => {
    const dispatch = useDispatch();
    const {count} = useSelector(state => state.counter);

    const handleIncrement = () => {
        dispatch(increment());
    }

    const handleDecrement= () =>{
        dispatch(decrement())
    }
    return(
        <>
        <button onClick={handleIncrement}>Up</button>
        <span>{count}</span>
        <button onClick={handleDecrement}>Down</button>
        </>
    )
}

