import { useEffect, useState } from "react";
import { ListFilter, Plus } from "lucide-react";
import { BoardTodo, Navbar, Searchbar, Footer, Loading } from "@/components";

const App = () => {
  // todo: add filter and search functionality
  // todo: add new todo item feature
  // todo: add edit and delete functionality
  // todo: add drag and drop functionality
  // ?: add dark mode
  // ?: add light mode
  // ?: add theme toggle

  // *: add authentication
  const [isAuthenticated, setIsAuthenticated] = useState(true);

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

  if (isLoading) return <Loading />;

  return (
    <div className="min-h-screen flex flex-col gap-5">
      <Navbar isAuthenticated={isAuthenticated} />

      <main className="content">
        <div className="content-header">
          <Searchbar />

          <div className="content-actions">
            <button className="btn btn-accent">
              <Plus size={20} />
              New Item
            </button>

            <button className="btn">
              <ListFilter size={20} />
              Filter
            </button>
          </div>
        </div>
        <div className="content-body">
          {["todo", "in-progress", "done", "on-hold"].map((type) => (
            <BoardTodo key={type} type={type} todos={todos} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;
