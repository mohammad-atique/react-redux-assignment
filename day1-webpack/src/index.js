import "./index.css";
import logo from "./logo.jpg";

const root = document.getElementById("root");


const navbar = document.createElement("div");
navbar.id = "nav";

const title = document.createElement("h4");
title.textContent = "Todo App";
title.id = "title";

const image = document.createElement("img");
image.src = logo;
image.id = "image";

const container = document.createElement("div");
container.id = "container";

const leftDiv = document.createElement("div");
leftDiv.id = "left";
const rightDiv = document.createElement("div");
rightDiv.id = "right";

// Left Div

const input = document.createElement("textarea");
input.placeholder = "Enter task to add"
const btn = document.createElement("button");
btn.id = "btn";
btn.innerText = "Add Task";

// Right Div

btn.addEventListener("click", () => {
  let todo = input.value;

  const list = document.createElement("div");
  list.id = "list";

  const p = document.createElement("p");
  p.innerText = todo;
  list.append(p);
  rightDiv.append(list);
});

navbar.append(image, title);
leftDiv.append(input, btn);
container.append(leftDiv, rightDiv);
root.append(navbar, container);

