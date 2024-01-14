import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { TodoAtomHai } from "../Store/TodoAtom";

const Todos = () => {
  const [todos, setTodos] = useRecoilState(TodoAtomHai);

  function deleteTodo() {
    let newTodo = todos.filter((id) => todos.id !== id);

    setTodos(newTodo);
  }

  return (
    <div style={{ display: "flex", gap: "3em" }}>
      {todos.map((e) => (
        <div key={e.id}>
          {e.task}
          <button onClick={deleteTodo(e.id)}>Delete </button>
        </div>
      ))}
    </div>
  );
};

export default Todos;
