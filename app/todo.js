"use client";

async function update(id, completed) {
    await fetch ('https://dummyjson.com/todos', {
        method: 'POST',
        mode: 'no-cors',
        body: JSON.stringify({id, completed})
    });
}

export default function Todo({todo}) {


return (
    <div>
 <input type = "checkbox"
             onChange = {(e) => update(todo.todo, e.target.checked)}
             checked={todo.completed}
             />
             {todo.todo}
             <button>Delete</button>
    </div>
  
);
    
}

