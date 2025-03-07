import { Ellipsis, Plus } from "lucide-react";
import { BoardItem } from "@/components";

const BoardTodoTitle = {
  todo: "To do",
  "in-progress": "In progress",
  done: "Done",
  "on-hold": "On hold",
};

const BoardTodo = ({ type, todos }) => {
  // todo: add modal to create new todo and edit existing todo

  // *: group todos by status
  const groupedTodos = todos.reduce((acc, current) => {
    acc[current.status] = [...(acc[current.status] || []), current];
    return acc;
  }, {});

  return (
    <div className="todo">
      <section className="todo-header">
        <h1 className="todo-title">{BoardTodoTitle[type]}</h1>

        <div className="todo-actions">
          <button className="px-1">
            <Plus size={18} />
          </button>

          <button className="px-1 py-3">
            <Ellipsis size={18} />
          </button>
        </div>
      </section>

      <div className="todo-body">
        {groupedTodos[type].map((todo) => (
          <BoardItem key={todo.todoId} todo={todo} />
        ))}
      </div>
    </div>
  );
};

export default BoardTodo;
