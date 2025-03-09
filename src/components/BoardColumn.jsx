import BoardItem from "@/components/BoardItem";
import { statusConfig } from "@/utils/config";

const sortData = (data) => {
  // *: group todos by status
  const groupedData = data.reduce((acc, curr) => {
    acc[curr.status] = [...(acc[curr.status] || []), curr];

    // *: sort todos by time
    if (acc[curr.status] && acc[curr.status].length > 0)
      acc[curr.status].sort((a, b) => {
        return new Date(a.deadline) - new Date(b.deadline);
      });

    return acc;
  }, {});

  return groupedData;
};

const BoardColumn = ({ status, todos }) => {
  // todo: add icon to todo title

  return (
    <section className="bg-base-200 h-fit p-5 rounded-md shadow-sm space-y-3">
      <h1 className="text-lg text-base-content/60">
        {statusConfig[status].title}
      </h1>

      <div className="space-y-3">
        {sortData(todos)[status] &&
          sortData(todos)[status].map((todo) => (
            <BoardItem key={todo.todoId} todo={todo} />
          ))}
      </div>
    </section>
  );
};

export default BoardColumn;
