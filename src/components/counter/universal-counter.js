import { useSelector } from 'react-redux';

const NavCounter = () => {
    const count = useSelector(state => state.counter.value) // expects the state of the redux store
  
    return (count);
}

export default NavCounter