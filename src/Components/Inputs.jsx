import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { TodoAtomHai } from "../Store/TodoAtom";

const Inputs = () => {
  let [todo, setTodo] = useRecoilState(TodoAtomHai);
  let [task, setTask] = useState();

  function addTodo() {
    let newTodo = [...todo, { id: todo.length + 1, task: task }];

    setTodo(newTodo);
  }

  return (
    <div>
      <label htmlFor="task">
        <input onChange={(e) => setTask(e.target.value)} type="text" />
      </label>
      <button onClick={addTodo}>Add Task</button>
    </div>
  );
};

export default Inputs;
