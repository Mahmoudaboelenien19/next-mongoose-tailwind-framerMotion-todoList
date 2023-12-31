import { TodoType } from "../types/todo";
import { apiUrl } from "../url";

const AddTodo = async (id: string, todo: TodoType) => {
  const res = await fetch(apiUrl + "/todos/" + id, {
    method: "POST",
    body: JSON.stringify(todo),
  });

  if (res.status === 200) {
    return await res.json();
  }
  return;
};

export default AddTodo;
