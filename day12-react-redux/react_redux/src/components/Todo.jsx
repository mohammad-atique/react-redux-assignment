import React from "react";
// import AllTodos from "./AllTodos";
import DoneTodos from "./DoneTodos";
import "./todo.css";
// import TodoList from "./TodoList";
import { useState } from "react";
import { addTodo } from "../Redux/actions";
import { nanoid } from "nanoid";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, toggleTodo } from "../Redux/actions";
export default function Todo() {
   const [doneTodos, setDoneTodos] = useState(false);
   const [text, setText] = useState("");

   const dispatch = useDispatch();

   const handleChange = (e) => {
      setText(e.target.value);
   };

   const handleAddition = () => {
      let id = nanoid(2);
      dispatch(
         addTodo({
            title: text,
            status: false,
            id: id,
         })
      );
   };
   const todos = useSelector((store) => store.todos);
   // console.log(todos);


   const handleDeletion = (id) => {
      dispatch(
         deleteTodo({
            id: id,
         })
      );
   };

   const handleToggle = (id) => {
      dispatch(
         toggleTodo({
            id: id,
         })
      );
   };

   return (
      <div className="todo">
         <h1>Todo App</h1>
         <div className="lower">
         <input
            onChange={handleChange}
            className="input"
            type="text"
            placeholder="Enter Todo Detail"
         />
         <button onClick={handleAddition} className="btn1">
            Add Todo
         </button>
      </div>
         <div className="list">
         <div className="allT">
         {todos.map((item) => {
            return (
               <div
                  key={item.id}
                  className={item.status === true ? "itemChecked" : "item"}
               >
                  <input
                     onChange={() => {
                        handleToggle(item.id);
                     }}
                     type="checkbox"
                     className="check"
                  />
                  <Link to={`/todo/${item.id}`} className="listText">
                     {item.title}
                  </Link>
                  <button
                     className="btn3"
                     onClick={() => {
                        handleDeletion(item.id);
                     }}
                  >
                     Delete
                  </button>
               </div>
            );
         })}
      </div>
            <div className="compT">
               <button
                  className="btn2"
                  onClick={() => {
                     setDoneTodos(!doneTodos);
                  }}
               >
                  Click to view all completed Todo's
               </button>
               {doneTodos ? <DoneTodos /> : null}
            </div>
         </div>
      </div>
   );
}
