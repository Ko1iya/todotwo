import React from "react"
import Task from "../Task/Task"
import styles from "./todoList.module.css"

interface TodoListProps {}

interface TodoListState {
  tasks: Array<{
    id: number
    taskState: "completed" | "editing" | "active"
    content: string
  }>
}

class TodoList extends React.Component<TodoListProps, TodoListState> {
  constructor(props: TodoListProps) {
    super(props)
    this.state = {
      tasks: [
        { id: 1, taskState: "completed", content: "Completed task" },
        { id: 2, taskState: "editing", content: "Editing task" },
        { id: 3, taskState: "active", content: "Active task" },
      ],
    }
  }

  toggleTaskState = (id: number) => {
    this.setState((prevState) => ({
      tasks: prevState.tasks.map((task) =>
        task.id === id
          ? {
              ...task,
              taskState: task.taskState === "active" ? "completed" : "active",
            }
          : task
      ),
    }))
  }

  deleteTask = (id: number) => {
    this.setState((prevState) => ({
      tasks: prevState.tasks.filter((task) => task.id !== id),
    }))
  }

  render() {
    return (
      <ul className={styles.todoList}>
        {this.state.tasks.map((task) => (
          <Task
            key={task.id}
            id={task.id}
            taskState={task.taskState}
            toggleTaskState={this.toggleTaskState}
            deleteTask={this.deleteTask}
          >
            {task.content}
          </Task>
        ))}
      </ul>
    )
  }
}

export default TodoList
