import '../../styles/TodoList/TodoListItem.css';
import DeleteIcon from '@mui/icons-material/Delete';

function TodoListItem(props) {
    return <div className="TodoListItem">
        <p className="TodoListItemName">{props.TodoName}</p>
        <select className="TodoOptionSelect" defaultValue={props.status} onChange={(e) => props.updateStatus(props.key, e.target.value)}>
            <option value="Done">Done</option>
            <option value="In Progress">In Progress</option>
            <option value="Todo">Todo</option>
        </select>
        <button className="TodoListItemRemove" onClick={() => props.removalFunction()}><DeleteIcon/></button>
    </div>
}

export default TodoListItem;