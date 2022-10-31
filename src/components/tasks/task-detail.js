const TaskDetail = ({item, index}) => {
    return(
        <tr key={index}>
            <td>{index + 1}</td>
            <td>{item._id}</td>
            <td>{item.Title}</td>
            <td>{item.Description}</td>
            <td>{item.Priority}</td>
            <td>
                <button className='btn btn-circle btn-common'><i className="edit fa-solid fa-pen-to-square"></i></button>
                <button className='btn btn-circle btn-common'><i className="delete fa-solid fa-delete-left"></i></button>
            </td>
        </tr>
    );
}

export default TaskDetail;