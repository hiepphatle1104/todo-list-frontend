export const Modal = ({ children, options }) => {
  const { id, content, childStyle } = options;

  const showPopup = () => document.getElementById(`modal-${id}`).showModal();

  return (
    <>
      <div className={`${childStyle}`} onClick={showPopup}>
        {children}
      </div>
      <dialog id={`modal-${id}`} className="modal">
        <div className="modal-box">
          {content}
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
