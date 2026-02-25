function TodolistItem({ children, isComplete }) {
  return (
    <div>
      <label htmlFor="checkbox">
        <input
          type="checkbox"
          id="checkbox"
          name={children}
          defaultChecked={isComplete}
          readOnly
        />
        {children}10
      </label>
    </div>
  );
}

export default TodolistItem;
