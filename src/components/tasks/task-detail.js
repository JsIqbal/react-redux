const TaskDetail = ({item, index}) => {
    return(
        <tr key={item.id}>
            <td>{index+1}</td>
            <td>{item.email}</td>
            <td>{item.description}</td>
            <td>{item.priority}</td>
            <td>
                <button className='btn btn-circle'><i className="fa-solid fa-pen-to-square"></i></button>
                <button className='btn btn-circle'><i className="fa-solid fa-delete-left"></i></button>
            </td>
        </tr>
    );
}

export default TaskDetail;