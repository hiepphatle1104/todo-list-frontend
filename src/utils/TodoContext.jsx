import { createContext, useState, useEffect } from "react";

const TodoContext = createContext();

const TodoProvider = ({ children }) => {
  // *: Loading state
  const [isLoading, setIsLoading] = useState(true);

  // *: get todos list from server
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const res = await fetch("src/db/todos.json");
        const data = await res.json();

        setTodos(data);
      } catch (error) {
        console.log("Error while fetching data from server", error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTodos();
  }, []);

  return (
    <TodoContext.Provider value={{ todos, isLoading }}>
      {children}
    </TodoContext.Provider>
  );
};

export { TodoProvider, TodoContext };
