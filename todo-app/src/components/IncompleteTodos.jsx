export const IncompleteTodos = (props) => {
  const { todos, onClickComplete, onClickDelete } = props;

  return (
    <div className="incomplete-area">
      <p className="title">未完了</p>
      <ul>
        {/*配列ループしながら新しい要素を一つずつ返却*/}
        {todos.map((todo, index) => (
          <li key={todo}>
            <div className="list-row">
              <p className="todo-list">{todo}</p>
              <button onClick={() => onClickComplete(index)}>完了</button>
              {/*アロー関数を追記して関数を生成してあげる必要がある*/}
              <button onClick={() => onClickDelete(index)}>削除</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
