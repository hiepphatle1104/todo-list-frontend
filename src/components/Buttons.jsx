import { AlignJustify, ListFilter, Plus, UserPlus } from "lucide-react";
import { Link } from "react-router";
import { Modal } from "@/components/Modal";

const modalOptions = {
  assignee: {
    id: "add-assignee",
    content: <h2>test</h2>,
    childStyle: "btn btn-info btn-soft",
  },
  newItem: {
    id: "new-item",
    content: <h2>test</h2>,
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
  return (
    <button className="btn">
      <ListFilter size={20} />
      Filter
    </button>
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
