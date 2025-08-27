export const CompleteTodos = (props) => {
  const { todos, onClickBack } = props;
  return (
    <div className="complete-area">
      <p className="title">完了</p>
      <ul>
        {/*配列ループしながら新しい要素を一つずつ返却*/}
        {todos.map((todo, index) => (
          <li key={todo}>
            <div className="list-row">
              <p className="todo-list">{todo}</p>
              <button onClick={() => onClickBack(index)}>戻す</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
