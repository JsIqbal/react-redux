import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { deleteTaskDataAction } from "../../redux/actions/task-action";

const TaskDetail = ({item, index}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return(
        <tr key={index}>
            <td>{index + 1}</td>
            <td>{item._id}</td>
            <td>{item.email}</td>
            <td>{item.description}</td>
            <td>{item.priority}</td>
            <td>
                <button className='btn btn-circle btn-common'>
                    <Link to={`/edit/${item._id}`}>
                        <i className="edit fa-solid fa-pen-to-square"></i>
                    </Link>
                </button>
                <button 
                    className='btn btn-circle btn-common'
                    onClick={() => {
                        dispatch(deleteTaskDataAction(item._id));
                        navigate('/');
                    }}
                >
                    <i className="delete fa-solid fa-delete-left"></i>
                </button>
            </td>
        </tr>
    );
}

export default TaskDetail;