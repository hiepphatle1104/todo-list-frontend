import { Outlet } from "react-router";
import { TodoProvider } from "@/utils/TodoContext";
import {
  AddAssigneeButton,
  FilterButton,
  NewItemButton,
} from "@/components/Buttons";
import { Ellipsis, ListFilter, Plus, UserPlus } from "lucide-react";
import { useState } from "react";
import { dateOptions, locale } from "@/utils/config";
import Dropdown from "@/components/Dropdown";
const Todo = () => {
  // ?: Is searchbar needed?
  // todo: add dropdown menu for header buttons
  const [currentDate, setCurrentDate] = useState(new Date());

  return (
    <TodoProvider>
      <div className="flex-1 py-5 flex flex-col gap-5 max-sm:px-5">
        {/* Header */}
        <div className="flex items-center justify-between">
          {/* Current Date */}
          <h1 className="text-xl font-medium">
            Today - {currentDate.toLocaleDateString(locale, dateOptions)}
          </h1>

          {/* Header Buttons */}
          <div className="flex items-center gap-2 max-lg:hidden">
            <AddAssigneeButton />
            <NewItemButton />
            <FilterButton />
          </div>

          {/* Mobile dropdown */}
          <div className="lg:hidden">
            <Dropdown
              btn={
                <button className="btn btn-ghost m-1">
                  <Ellipsis />
                </button>
              }
            >
              <li>
                <a>
                  <UserPlus size={20} /> Add Assignee
                </a>
              </li>
              <li>
                <a>
                  <Plus size={20} />
                  New Item
                </a>
              </li>
              <li>
                <a>
                  <ListFilter size={20} />
                  Filter
                </a>
              </li>
            </Dropdown>
          </div>
        </div>

        {/* Body */}
        <Outlet />
      </div>
    </TodoProvider>
  );
};

export default Todo;
