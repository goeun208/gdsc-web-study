import React from "react";
import Main from './components/Main';
import './App.css';
import { useState } from "react";
import Template from "./components/Template";
import TodoList from "./components/TodoList";
import TodoInsert from "./components/TodoInsert";

function App() {
   // 토글함수
   
   const [todos, setTodos] = useState([
     {
       id: 1,
       text: "할일 1",
       checked: true
     },
     {
       id: 2,
       text: "할일 2",
       checked: false
     },
     {
       id: 3,
       text: "할일 3",
       checked: true
     }
   ]);
//체크되도록 기능 구현(만약 id가 같다면 checked의 불리언값 반대, id 다르면 todo반환)
const onCheckToggle =(id) => {
  setTodos(todos => 
    todos.map(todo => 
      todo.id === id ? {...todo, checked: !todo.checked }: todo
      )
  );
}
  return (
    <>
    <Main>
      <Template>
        <TodoList todos= {todos} setTodos = {setTodos} onCheckToggle = {onCheckToggle}/>
        
      </Template>
    </Main>
     </>
    
  );
}

export default App;
