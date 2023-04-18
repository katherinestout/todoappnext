

const getTodos = async () => {

    let response = await fetch("http://localhost:3000/api", {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        },
    })
    const json = await response.json();

    return json;
}

export default async function TodoList() {

    const todos = await getTodos();
   
    return (
        <div>
            {todos.map((t) => {
                return (
                    <div key = {t._id}> {t.todo} </div>
                )
            })}
        </div>
    );
    
}