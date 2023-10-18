import { apiUrl } from "../url";
import { revalidateALlTodos } from "./revalidiateFn";

const deleteTodo = async (id: string, todoId: string) => {
  console.log("url -> ", apiUrl + "/todos/" + id + `?todoId=${todoId}`);
  const res = await fetch(apiUrl + "/todos/" + id + `?todoId=${todoId}`, {
    method: "DELETE",
  });
  if (res.status === 200) {
    // await revalidateALlTodos();
    return await res.json();
  }
  return;
};

export default deleteTodo;