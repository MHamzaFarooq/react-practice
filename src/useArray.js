import React, { useState } from "react";

function useArray(initialArray) {
  const [array, setArray] = useState(initialArray);

  function set(value) {
    setArray(value);
  }

  function push(value) {
    setArray((prev) => [...prev, value]);
  }

  function filter(callback) {
    setArray((prev) => prev.filter(callback));
  }

  function remove(index) {
    setArray((prev) => prev.filter((_, i) => i !== index));
  }

  function clear() {
    setArray([]);
  }

  function reset() {
    setArray(initialArray);
  }

  return { array, set, push, filter, remove, clear, reset };
}

export default useArray;
