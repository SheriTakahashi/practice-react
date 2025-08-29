import { useState } from "react";
import { InputTodo } from "./components/InputTodo.jsx";
import { IncompleteTodos } from "./components/IncompleteTodos.jsx";
import { CompleteTodos } from "./components/CompleteTodos.jsx";
import "./App.css";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);

  //入力欄に文字が入った時の処理
  const onChangeTodoText = (event) => setTodoText(event.target.value);
  //追加ボタンを押した時の処理
  const onClickAdd = () => {
    if (todoText === "") return; //入力欄に何も入ってない時は追加ボタンは反応しない
    const newTodos = [...incompleteTodos, todoText]; //スプレット構文
    setIncompleteTodos(newTodos); //更新する
    setTodoText(""); //追加後空文字にする
  };

  //削除ボタンを押した時の処理
  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    //特定の配列の中から何番目の要素を何個削除する
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };

  //完了ボタンを押した時の処理
  const onClickComplete = (index) => {
    const newIncompleteTodos = [...incompleteTodos];
    //特定の配列の中から何番目の要素を何個削除する
    newIncompleteTodos.splice(index, 1);
    //配列の中から指定したインデックスを指定する
    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
  };

  //戻すボタンを押した時の処理
  const onClickBack = (index) => {
    const newCompleteTodos = [...completeTodos];
    //特定の配列の中から何番目の要素を何個削除する
    newCompleteTodos.splice(index, 1);
    //配列の中から指定したインデックスを指定する
    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
    setCompleteTodos(newCompleteTodos);
    setIncompleteTodos(newIncompleteTodos);
  };

  //上限の表示と機能で重複しないために定数を定義
  const isMaxLimitIncomplateTodos = incompleteTodos.length >= 5;

  return (
    <>
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
        disabled={isMaxLimitIncomplateTodos}
      />
      {isMaxLimitIncomplateTodos && (
        <p style={{ color: "#ff8c00" }}>登録できるTODOは5個までだよ！</p>
      )}
      <IncompleteTodos
        todos={incompleteTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />
      <CompleteTodos todos={completeTodos} onClickBack={onClickBack} />
    </>
  );
};

export default App;
