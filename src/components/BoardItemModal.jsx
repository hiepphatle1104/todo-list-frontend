const BoardItemModal = ({ children, todo }) => {
  return (
    <>
      <div
        className="cursor-pointer"
        onClick={() =>
          document.getElementById(`modal-${todo.todoId}`).showModal()
        }
      >
        {children}
      </div>
      <dialog
        id={`modal-${todo.todoId}`}
        className="modal modal-bottom sm:modal-middle"
      >
        <div className="modal-box">
          <h3 className="font-bold text-lg">{todo.title}</h3>
          <p className="py-4">{todo.description}</p>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
};

export default BoardItemModal;
