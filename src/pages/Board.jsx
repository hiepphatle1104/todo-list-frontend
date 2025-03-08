import BoardColumn from "@/components/BoardColumn";
import { useContext } from "react";
import Loading from "@/components/Loading";
import { TodoContext } from "@/utils/TodoContext";

const statuses = ["todo", "in-progress", "done", "on-hold"];

const Board = () => {
  // *: loading data
  const { todos, isLoading } = useContext(TodoContext);

  if (isLoading) return <Loading />;
  return (
    <>
      <div className="board-layout">
        {statuses.map((status) => (
          <BoardColumn key={status} status={status} todos={todos} />
        ))}
      </div>
    </>
  );
};

export default Board;
