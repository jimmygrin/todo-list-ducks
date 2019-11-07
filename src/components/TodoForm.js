import React, { useState } from "react"
import { useTodos } from "../redux/ducks/todos"

export default function(props) {
  const { add } = useTodos()
  const [todo, setTodo] = useState("")

  function handleSubmit(e) {
    e.preventDefault()

    add(todo)
    setTodo("")
  }

  return (
    <div id="container">
      <h1>Things to do</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="What do you need to do today?"
          onChange={e => setTodo(e.target.value)}
          value={todo}
        />
        <button id="buttonform" type="submit">Submit</button>
      </form>
    </div>
  )
}
