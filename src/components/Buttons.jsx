import { AlignJustify, ListFilter, Plus, UserPlus } from "lucide-react";
import { Link } from "react-router";
import { Modal } from "@/components/Modal";
import Dropdown from "@/components/Dropdown";

const AssigneeContent = () => {
  return (
    <>
      <h1 className="font-medium">Add Assignee</h1>

      <div className="divider my-1"></div>
      <div className="space-y-3">
        <fieldset className="fieldset">
          <legend className="fieldset-legend">Assignee Name</legend>
          <input
            type="text"
            className="input w-full"
            placeholder="Assignee name"
          />
        </fieldset>

        <button className="btn w-full">Add</button>
      </div>
    </>
  );
};

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
  assignee: {
    id: "add-assignee",
    content: <AssigneeContent />,
    childStyle: "btn btn-info btn-soft",
  },
  newItem: {
    id: "new-item",
    content: <NewItemContent />,
    childStyle: "btn btn-accent",
  },
};

const AddAssigneeButton = () => {
  return (
    <Modal options={modalOptions["assignee"]}>
      <UserPlus size={20} />
      Add Assignee
    </Modal>
  );
};

const NewItemButton = () => {
  return (
    <Modal options={modalOptions["newItem"]}>
      <Plus size={20} />
      New Item
    </Modal>
  );
};

const FilterButton = () => {
  const btn = (
    <button className="btn">
      <ListFilter size={20} />
      Filter
    </button>
  );
  return (
    <Dropdown btn={btn}>
      <li>
        <a>High</a>
      </li>
      <li>
        <a>Medium</a>
      </li>
    </Dropdown>
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
  AddAssigneeButton,
  SidebarButton,
  LetsUseButton,
  LoginButton,
  RegisterButton,
  NewItemButton,
  FilterButton,
};
