
const ADD_TODO = "ADD_TODO";

const addTodo = (title) => {
  return {
    type: ADD_TODO,
    payload: { title: title, status: false },
  };
};

const reducer = (store, action) => {
  switch (action.type) {
    case ADD_TODO:
      return { ...store, todos: [...store.todos, action.payload] };
    default:
      return store;
  }
};
const initialState = {
  todos: [],
};

const store = Redux.createStore(reducer, initialState);

let container = document.getElementById("container");

const handleTodo = () => {
  let todo = document.getElementById("input").value;
 
  store.dispatch(addTodo(todo));
  let todos_data = store.getState().todos;
  console.log(todos_data);
  container.innerHTML = "";
  todos_data.map((e) => {
    let div = document.createElement("div");
    div.setAttribute("class", "flex");
    let p1 = document.createElement("p");
    p1.textContent = e.title;
    let p2 = document.createElement("p");
    p2.addEventListener("click", ()=> {
      if (e.status == "true") {
        e.status = "false";
      } else {
        e.status = "true";
      }
      p2.textContent = e.status;
    });
    p2.textContent = e.status;

    div.append(p1, p2);
    container.append(div);
  });
};

document.getElementById("btn").addEventListener("click", handleTodo);