import { Outlet } from "react-router";
import { TodoProvider } from "@/utils/TodoContext";
import { NewItemButton } from "@/components/Buttons";
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
          <NewItemButton />
        </div>

        {/* Body */}
        <Outlet />
      </div>
    </TodoProvider>
  );
};

export default Todo;
