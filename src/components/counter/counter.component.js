import { useSelector } from 'react-redux';

const Counter = () => {
    const count = useSelector(state => state.counter.value) // expects the state of the redux store
  
    return (
        <div>
            { count }
        </div>
    )
}

export default Counter;