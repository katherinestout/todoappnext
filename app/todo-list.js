import Todo from "./todo";

const getTodos = async () => {
    let todos = await fetch('https://dummyjson.com/todos?limit=5');
    return todos.json();
}

// const getTheTodos = async function getServerSideProps(context) {
//     let res = await fetch("http://localhost:3000/api/hello/route", {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });
//       let allPosts = await res.json();
    
//       return {
//         props: { allPosts },
//       };
//     }
    


export default async function TodoList() {
    const {todos} = await getTodos();
    //console.log(todos);
    // const {moreTodos} = await getTheTodos();
    // console.log(moreTodos);
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