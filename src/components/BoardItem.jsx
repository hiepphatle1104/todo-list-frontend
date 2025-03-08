import { ClockAlert, Paperclip } from "lucide-react";
import { Modal } from "@/components/Modal";
import {
  priorityColor,
  itemDateOptions,
  locale,
  statusConfig,
  dateOptions,
} from "@/utils/config";

const BoardItem = ({ todo }) => {
  const formattedDeadline = new Date(todo.deadline).toLocaleDateString(
    locale,
    itemDateOptions
  );

  const itemDetails = { ...todo };

  const modalOptions = {
    id: todo.todoId,
    content: <BoardItemContent details={itemDetails} />,
    childStyle: "cursor-pointer",
  };

  return (
    <Modal options={modalOptions}>
      <section className="board-item">
        {/* Header */}
        <div className="flex items-center gap-2">
          <div
            className={`status status-${priorityColor[todo.priority]}`}
          ></div>
          <h2 className="text-base font-medium line-clamp-1">{todo.title}</h2>
        </div>

        {/* Description */}
        <p className="text-sm text-base-content/70 line-clamp-3">
          {todo.description}
        </p>

        {/* Divider */}
        <div className="divider my-2"></div>

        {/* Footer */}
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
    </Modal>
  );
};

const BoardItemContent = ({ details }) => {
  const formattedDeadline = new Date(details.deadline).toLocaleDateString(
    locale,
    dateOptions
  );

  return (
    <>
      {/* Header */}
      <div className="flex justify-between items-center">
        {/* Title */}
        <div className="flex items-center gap-2">
          <div
            className={`status status-lg status-${
              priorityColor[details.priority]
            }`}
          ></div>
          <h2 className="text-lg font-medium line-clamp-1">{details.title}</h2>
        </div>

        {/* tag */}
        <div
          className={`badge badge-${
            statusConfig[details.status].color
          } badge-soft`}
        >
          {statusConfig[details.status].title}
        </div>
      </div>

      <div className="divider my-1"></div>

      {/* Body */}
      <div className="space-y-4">
        {/* Description */}
        <section className="space-y-1">
          <h4 className="text-sm font-semibold">Description</h4>
          <p>{details.description}</p>
        </section>

        {/* Attachments */}
        <section>
          <h4 className="text-sm font-semibold">Attachments</h4>
          {details.attachFile.length > 0 ? (
            <div className="flex items-center gap-2">
              <Paperclip size={18} />
              {details.attachFile.map((name) => (
                <p key={name} className="text-sm">
                  {name}
                </p>
              ))}
            </div>
          ) : (
            <p className="text-base-content/60">You dont have any file</p>
          )}
        </section>

        {/* Deadline */}
        <section>
          <h4 className="text-sm font-semibold">Deadline</h4>
          <p>{formattedDeadline}</p>
        </section>

        {/* Assignee */}
        <section>
          <h4 className="text-sm font-semibold">Assignee</h4>
          <p>{details.username}</p>
        </section>
      </div>
    </>
  );
};

export default BoardItem;
