import '../../styles/TodoList/TodoList.css';
import React, { useState } from 'react';
import TodoListItem from './TodoListItem';

function TodoList() {

    const [todoListItems, setTodoListItems] = useState([])
    const [todoListItemName, setTodoListItemName] = useState("")
    const [todoListID, setTodoID] = useState(0);

    function removeTodoListById(id) {
        setTodoListItems(todoListItems.filter(item => item.id !== id));
    }

    function addTodoListItem() {
        if (todoListItemName === "") {
            return;
        }
        setTodoListItems([...todoListItems, { id: todoListID, name: todoListItemName, status: "Todo"}]);
        setTodoID(todoListID + 1);
        setTodoListItemName("");
    }

    function updateTodoStatus(id, newStatus) {
        setTodoListItems(todoListItems.map(item => item.id === id ? { ...item, status: newStatus } : item));
    }

    return <div className="InnerShowcaseContainer">
        <p className="InnerShowcaseHeader">Todo List Component</p>
        <div className="TodoHeaderBar">
            <input className="TodoListHeaderInput" value={todoListItemName} onChange={(e) => {setTodoListItemName(e.target.value)}}></input>
            <button className="TodoListHeaderSubmit" onClick={() => addTodoListItem()}>Submit</button>
        </div>
        <div className="TodoBody">
             {todoListItems.map((item) => (
                 <TodoListItem TodoName={item.name} status={item.status} key={item.id} removalFunction={() => removeTodoListById(item.id)} updateStatus={updateTodoStatus} />
             ))}
        </div>
    </div>
}

export default TodoList;