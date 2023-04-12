import Todo from "./todo";

const getTodos = async () => {
    let todos = await fetch('https://dummyjson.com/todos?limit=5');
    return todos.json();
}


export default async function TodoList() {
    const {todos} = await getTodos();
    //console.log(todos);
    return (
        <div>
<ul>
 {todos.map((t) => {
     return (
         <li key={t.id}>
            <Todo todo= {t}/>
         </li>
     )
 })}
</ul>
        </div>
    );
    
}