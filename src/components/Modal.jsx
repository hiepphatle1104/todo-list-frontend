export const Modal = ({ children, options }) => {
  const { id, content, childStyle } = options;

  const showPopup = () => document.getElementById(`modal-${id}`).showModal();

  return (
    <>
      <div className={`${childStyle}`} onClick={showPopup}>
        {children}
      </div>
      <dialog id={`modal-${id}`} className="modal">
        <div className="modal-box space-x-5">
          <div className="space-x-5">
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>
            {content}
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
};
