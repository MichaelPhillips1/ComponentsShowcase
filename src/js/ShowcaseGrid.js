import TimeLine from "./TimeLine/TimeLine";
import TodoList from "./TodoList/TodoList";

function ShowcaseGrid() {
    return <div className="ShowcaseGrid">
        <div className="ShowcaseGridBlock">
            <TodoList />
        </div>
        <div className="ShowcaseGridBlock">
            <TimeLine />
        </div>
         <div className="ShowcaseGridBlock">
            
        </div>
    </div>
}

export default ShowcaseGrid;