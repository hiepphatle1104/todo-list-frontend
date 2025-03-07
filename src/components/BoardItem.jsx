import { ClockAlert, Paperclip } from "lucide-react";
import { BoardItemModal } from "@/components";

const ItemPriority = {
  low: "status-success",
  medium: "status-warning",
  high: "status-error",
};

const BoardItem = ({ todo }) => {
  const formattedDeadline = new Date(todo.deadline).toLocaleDateString(
    "en-US",
    {
      month: "short",
      day: "numeric",
    }
  );

  return (
    <BoardItemModal todo={todo}>
      <section className="bg-base-100 border-1 border-base-300 shadow-sm rounded-sm p-4 hover:bg-base-200">
        <div className="flex items-center gap-2">
          <div className={`status ${ItemPriority[todo.priority]}`}></div>
          <h2 className="text-base font-medium line-clamp-1">{todo.title}</h2>
        </div>

        <p className="text-sm text-base-content/70 line-clamp-3">
          {todo.description}
        </p>

        <div className="divider my-2"></div>

        <div className="flex justify-between items-center text-base-content/70">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              {todo.attachFile.length > 0 ? (
                <>
                  <Paperclip size={18} />
                  <p className="text-sm">{todo.attachFile.length}</p>
                </>
              ) : (
                <>
                  <Paperclip size={18} className="text-base-content/40" />
                </>
              )}
            </div>
            <div className="flex items-center gap-1">
              <ClockAlert size={18} />
              <p className="text-sm">{formattedDeadline}</p>
            </div>
          </div>

          <div className="avatar avatar-placeholder w-8">
            <div className="bg-neutral text-neutral-content w-full rounded-full">
              <span className="text-base">
                {todo.username.charAt(0).toUpperCase()}
              </span>
            </div>
          </div>
        </div>
      </section>
    </BoardItemModal>
  );
};

export default BoardItem;
