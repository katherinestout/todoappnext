import AddNewTodo from "./add-new-todo";
import TodoList from "./todo-list";
require('dotenv').config();


export default function Home() {
  return (
<div>
  <AddNewTodo/>
  <TodoList/>

</div>
  )
}
