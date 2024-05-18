import React, { Component } from "react"
import Header from "../Header/Header"
import Main from "../Main/Main"
import styles from "./todoApp.module.css"
import { ITask } from "../../types"

interface TodoAppProps {}
interface TodoAppState {
  tasks: ITask[]
  selected: string
}

class TodoApp extends Component<TodoAppProps, TodoAppState> {
  constructor(props: TodoAppProps) {
    super(props)
    this.state = {
      tasks: [
        { id: 1, taskState: "completed", content: "Completed task" },
        { id: 2, taskState: "editing", content: "Editing task" },
        { id: 3, taskState: "active", content: "Active task" },
      ],
      selected: "All",
    }
  }

  handlerChangeContent = (
    e: React.ChangeEvent<HTMLInputElement>,
    idProp: number
  ) => {
    this.setState((prevstate) => {
      const newArr = [...prevstate.tasks]

      return {
        tasks: newArr.map((el) =>
          el.id === idProp ? { ...el, content: e.target.value } : el
        ),
      }
    })
  }

  handlertoggleEditingToActive = (
    e: React.KeyboardEvent<HTMLInputElement>,
    idProp: number
  ) => {
    if (e.key === "Enter") {
      this.setState((prevState) => {
        const newArr = [...prevState.tasks]

        return {
          tasks: newArr.map((task) =>
            task.id === idProp
              ? {
                  ...task,
                  taskState:
                    task.taskState === "editing" ? "active" : "editing",
                }
              : task
          ),
        }
      })
    }
  }
  handlertoggleTaskStateCompleted = (id: number) => {
    this.setState((prevState) => {
      const newArr = [...prevState.tasks]

      return {
        tasks: newArr.map((task) =>
          task.id === id
            ? {
                ...task,
                taskState: task.taskState === "active" ? "completed" : "active",
              }
            : task
        ),
      }
    })
  }
  handlertoggleTaskStateEditing = (id: number) => {
    this.setState((prevState) => {
      const newArr = [...prevState.tasks]

      return {
        tasks: newArr.map((task) =>
          task.id === id
            ? {
                ...task,
                taskState: task.taskState === "editing" ? "active" : "editing",
              }
            : task
        ),
      }
    })
  }

  handlerDeleteTask = (id: number) => {
    this.setState((prevState) => {
      const newArr = [...prevState.tasks]
      return { tasks: newArr.filter((task) => task.id !== id) }
    })
  }

  handlerDeleteCompleted = () => {
    this.setState((prevState) => {
      const newArr = [...prevState.tasks]
      return { tasks: newArr.filter((task) => task.taskState !== "completed") }
    })
  }

  handlerAddTask = (value: string) => {
    let newTask: ITask = {
      id: this.state.tasks.length + 1,
      taskState: "active",
      content: value,
    }

    this.setState((prevState) => ({
      tasks: [...prevState.tasks, newTask],
    }))
  }

  handlerСhangeSelected = (newState: string) => {
    this.setState(() => {
      return { selected: newState }
    })
  }

  render() {
    return (
      <section className={styles.todoApp}>
        <Header addTask={this.handlerAddTask} />
        <Main
          todoCount={
            this.state.tasks.filter(({ taskState }) => taskState === "active")
              .length
          }
          tasks={this.state.tasks}
          toggleTaskStateCompleted={this.handlertoggleTaskStateCompleted}
          deleteTask={this.handlerDeleteTask}
          selected={this.state.selected}
          changeSelected={this.handlerСhangeSelected}
          deleteCompleted={this.handlerDeleteCompleted}
          changeContent={this.handlerChangeContent}
          toggleTaskStateEditing={this.handlertoggleTaskStateEditing}
          toggleEditingToActive={this.handlertoggleEditingToActive}
        />
      </section>
    )
  }
}

export default TodoApp
