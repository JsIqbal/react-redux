import { useDispatch } from 'react-redux';
import { decrease, increase } from '../../redux/counterSlice';

const CounterHit = () => {
    const dispatch = useDispatch();
  
    return (
        <div>
            <button className='btn btn-success me-4' onClick={() => dispatch(increase())}>
                <i class="fa-solid fa-plus"></i>
            </button>
            <button className='btn btn-danger' onClick={() => dispatch(decrease())}>
                <i class="fa-solid fa-minus"></i>
            </button>
            <p>Increamenting/decreamenting from a unlinked component through REDUX toolkit</p>
        </div>
    )
}

export default CounterHit;