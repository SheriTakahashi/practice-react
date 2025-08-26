import { useState } from "react";
import "./App.css";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incomplateTodos, setIncomplateTodos] = useState([]);
  const [complateTodos, setComplateTodos] = useState([]);

  //入力欄に文字が入った時の処理
  const onChangeTodoText = (event) => setTodoText(event.target.value);
  //追加ボタンを押した時の処理
  const onClickAdd = () => {
    if (todoText === "") return; //入力欄に何も入ってない時は追加ボタンは反応しない
    const newTodos = [...incomplateTodos, todoText]; //スプレット構文
    setIncomplateTodos(newTodos); //更新する
    setTodoText(""); //追加後空文字にする
  };

  //削除ボタンを押した時の処理
  const onClickDelete = (index) => {
    const newTodos = [...incomplateTodos];
    //特定の配列の中から何番目の要素を何個削除する
    newTodos.splice(index, 1);
    setIncomplateTodos(newTodos);
  };

  //完了ボタンを押した時の処理
  const onClicComplate = (index) => {
    const newIncomplateTodos = [...incomplateTodos];
    //特定の配列の中から何番目の要素を何個削除する
    newIncomplateTodos.splice(index, 1);
    //配列の中から指定したインデックスを指定する
    const newComplateTodos = [...complateTodos, incomplateTodos[index]];
    setIncomplateTodos(newIncomplateTodos);
    setComplateTodos(newComplateTodos);
  };

  //戻すボタンを押した時の処理
  const onClicBack = (index) => {
    const newComplateTodos = [...complateTodos];
    //特定の配列の中から何番目の要素を何個削除する
    newComplateTodos.splice(index, 1);
    //配列の中から指定したインデックスを指定する
    const newIncomplateTodos = [...incomplateTodos, complateTodos[index]];
    setComplateTodos(newComplateTodos);
    setIncomplateTodos(newIncomplateTodos);
  };

  return (
    <>
      <div className="input-area">
        <input
          placeholder="TODOを入力"
          value={todoText}
          onChange={onChangeTodoText}
        />
        <button onClick={onClickAdd}>追加</button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了</p>
        <ul>
          {/*配列ループしながら新しい要素を一つずつ返却*/}
          {incomplateTodos.map((todo, index) => {
            return (
              <li key={todo}>
                <div className="list-row">
                  <p className="todo-list">{todo}</p>
                  <button onClick={() => onClicComplate(index)}>完了</button>
                  {/*アロー関数を追記して関数を生成してあげる必要がある*/}
                  <button onClick={() => onClickDelete(index)}>削除</button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">完了</p>
        <ul>
          {/*配列ループしながら新しい要素を一つずつ返却*/}
          {complateTodos.map((todo, index) => {
            return (
              <li key={todo}>
                <div className="list-row">
                  <p className="todo-list">{todo}</p>
                  <button onClick={() => onClicBack(index)}>戻す</button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default App;
