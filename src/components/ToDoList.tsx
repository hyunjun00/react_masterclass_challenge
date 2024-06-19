import { useRecoilState, useRecoilValue } from "recoil";
import CreateToDo from "./CreateToDo";
import { Categories, categoryState, toDoSelector } from "../atoms";
import ToDo from "./ToDo";
import React from "react";

function ToDoList() {
  const toDos = useRecoilValue(toDoSelector);
  const [category, setCategory] = useRecoilState(categoryState);
  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value as any);
  };
  return (
    <div>
      <h1>To Dos</h1>
      <hr />
      {/* <CreateCategory /> */}
      <select value={category} onInput={onInput}>
        {Categories.map((cate, idx) => (
          <option key={idx + ""} value={cate}>
            {cate}
          </option>
        ))}
        {/* {Object.values(category).map((idx, cate) => (
          <option id={idx} value={cate}>
            {cate}
          </option>
        ))} */}
      </select>
      <CreateToDo />
      {toDos.map((toDo) => (
        <ToDo key={toDo.id} {...toDo} />
      ))}
    </div>
  );
}

export default ToDoList;
