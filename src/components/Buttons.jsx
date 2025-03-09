import { AlignJustify, Plus } from "lucide-react";
import { Link } from "react-router";
import { Modal } from "@/components/Modal";

const NewItemContent = () => {
  return (
    <>
      <h1 className="font-medium">New Item</h1>

      <div className="divider my-1"></div>

      <div className="space-y-3">
        <div className="join join-vertical w-full">
          <div className="join-item">
            <fieldset className="fieldset">
              <legend className="fieldset-legend">
                Title
                <div className="fieldset-label">( Required )</div>
              </legend>
              <input type="text" className="input w-full" placeholder="Title" />
            </fieldset>
          </div>
          <div className="join-item">
            <fieldset className="fieldset">
              <legend className="fieldset-legend">
                Description
                <div className="fieldset-label">( Optional )</div>
              </legend>
              <textarea
                className="textarea h-24 w-full"
                placeholder="Description"
              ></textarea>
            </fieldset>
          </div>
          <div className="flex gap-5 justify-between items-center">
            <div className="join-item">
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Attachments</legend>
                <input type="file" className="file-input w-full" />
              </fieldset>
            </div>

            <div className="join-item">
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Deadline</legend>
                <input type="date" className="input w-35" />
              </fieldset>
            </div>
          </div>
        </div>

        <button className="btn w-full">Create</button>
      </div>
    </>
  );
};

const modalOptions = {
  newItem: {
    id: "new-item",
    content: <NewItemContent />,
    childStyle: "btn btn-accent max-md:btn-xs max-lg:btn-sm",
  },
};

const NewItemButton = () => {
  return (
    <Modal options={modalOptions["newItem"]}>
      <Plus size={20} />
      New Item
    </Modal>
  );
};

const SidebarButton = () => {
  return (
    <label htmlFor="sidebar" className="drawer-button btn btn-ghost lg:hidden">
      <AlignJustify size={20} />
    </label>
  );
};

const LetsUseButton = () => {
  return (
    <Link to={"/board"} className="btn btn-ghost">
      Let's use
    </Link>
  );
};

const LoginButton = () => {
  return <button className="btn btn-soft">Login</button>;
};

const RegisterButton = () => {
  return <button className="btn btn-neutral">Register</button>;
};

export {
  SidebarButton,
  LetsUseButton,
  LoginButton,
  RegisterButton,
  NewItemButton,
};
