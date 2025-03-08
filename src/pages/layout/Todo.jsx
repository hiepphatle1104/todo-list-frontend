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
          <details className="dropdown dropdown-end lg:hidden z-10">
            <summary className="btn btn-ghost m-1">
              <Ellipsis />
            </summary>
            <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
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
            </ul>
          </details>
        </div>

        {/* Body */}
        <Outlet />
      </div>
    </TodoProvider>
  );
};

export default Todo;
