import { useSelector } from 'react-redux';

const Counter = () => {
    const count = useSelector(state => state.counterSlice.value)
    return (
        <div>
            { count }
        </div>
    )
}

export default Counter;