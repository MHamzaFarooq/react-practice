import React, { useState } from "react";

export default function TodoList({ todos, setTodos }) {
  const [editingId, setEditingId] = useState(null);
  const [editValue, setEditValue] = useState("");

  function markAsCompleted(id) {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo,
      ),
    );
  }

  function deleteTodo(id) {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  }

  function startEditing(todo) {
    setEditingId(todo.id);
    setEditValue(todo.value);
  }

  function saveEdit(id) {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, value: editValue } : todo,
      ),
    );
    setEditingId(null);
  }

  return (
    <div>
      {todos.map((todo) => (
        <div
          key={todo.id}
          style={{
            display: "flex",
            gap: "10px",
            margin: "20px 0",
          }}
        >
          <input
            type="checkbox"
            checked={todo.isCompleted}
            onChange={() => markAsCompleted(todo.id)}
          />

          {editingId === todo.id ? (
            <>
              <input
                value={editValue}
                onChange={(e) => setEditValue(e.target.value)}
              />
              <button onClick={() => saveEdit(todo.id)}>Save</button>
            </>
          ) : (
            <>
              <div
                style={{
                  textDecoration: todo.isCompleted ? "line-through" : "none",
                }}
              >
                {todo.value}
              </div>
              <button onClick={() => startEditing(todo)}>Edit</button>
            </>
          )}

          <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}
