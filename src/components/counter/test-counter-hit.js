import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrease, increase, update, incSpecific } from '../../redux/counter-slice';
import Counter from './counter.component';

const CounterHit = () => {
    const userList = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    const [number, setNumber] = useState(0);

    return (
        <div>
            <div className='row'>
                <div className='col-lg-3 me-auto'>
                    <button className='btn btn-danger' onClick={() => dispatch(decrease())}>
                        <i className="fa-solid fa-minus"></i>
                    </button>
                </div>
                <div className='col-lg-3'>
                    { Counter()}
                </div>
                <div className='col-lg-3 ms-auto'>
                    <button className='btn btn-success me-4' onClick={() => dispatch(increase())}>
                        <i className="fa-solid fa-plus"></i>
                    </button>
                </div>
            </div>
            <p>Increamenting/decreamenting from a unlinked component through REDUX toolkit</p>
            <br/>
            <input onChange={(e)=> {setNumber(e.target.value)}} />
            <br/>
            <button className='mt-2 btn btn-danger' 
                onClick={
                    () => {
                        dispatch(update(number))
                    }
                }
            >
                update
            </button>
            <button className='ms-2 mt-2 btn btn-success' 
                onClick={
                    () => {
                        dispatch(increase(number))
                    }
                }
            >
                Increament specific value
            </button>
        </div>
    )
}

export default CounterHit;