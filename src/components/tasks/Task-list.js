import { Table } from 'react-bootstrap';
import TaskDetail from './task-detail';

const TaskList = ({ tasks, setIsCreateMode}) => {
    return(
        <>
            <div className='ms-auto col-lg-5 text-end'>
                <div>
                    <button 
                        onClick={()=> setIsCreateMode()} 
                        className='text-align-right btn btn-primary'
                    >
                        <i className="fa-solid fa-plus"></i>
                    </button>
                </div>
            </div>

            <Table striped bordered hover className='mt-4'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Id</th>
                        <th>Email</th>
                        <th>Description</th>
                        <th>Priority</th>
                        <th>Edit/Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        tasks.map((item, index) => (
                            <TaskDetail key={index} item={item} index={index} />
                        ))
                    }
                </tbody>
            </Table>
        </>
    );
}

export default TaskList;