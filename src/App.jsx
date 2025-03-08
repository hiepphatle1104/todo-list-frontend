import { Routes, Route } from "react-router";
import Todo from "@/pages/layout/Todo";
import Main from "@/pages/layout/Main";
import Home from "@/pages/Home";
import Board from "@/pages/Board";

const App = () => {
  return (
    <Routes>
      <Route element={<Main />}>
        <Route index element={<Home />} />
        <Route element={<Todo />}>
          <Route path="board" element={<Board />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
