import { ITodoListProps } from "../../types"
import Footer from "../Footer/Footer"
import TodoList from "../TodoList/TodoList"
import styles from "./main.module.css"

interface IMainProps extends ITodoListProps {
  todoCount: number
  selected: string
  changeSelected: (newState: string) => void
  deleteCompleted: () => void
  changeContent: (
    e: React.ChangeEvent<HTMLInputElement>,
    idProp: number
  ) => void
}

function Main(prop: IMainProps) {
  const {
    tasks,
    toggleTaskStateCompleted,
    deleteTask,
    todoCount,
    deleteCompleted,
    changeContent,
    toggleTaskStateEditing,
    toggleEditingToActive,
  } = prop

  return (
    <div className={styles.main}>
      <TodoList
        tasks={tasks}
        toggleTaskStateCompleted={toggleTaskStateCompleted}
        deleteTask={deleteTask}
        selected={prop.selected}
        changeContent={changeContent}
        toggleTaskStateEditing={toggleTaskStateEditing}
        toggleEditingToActive={toggleEditingToActive}
      />
      <Footer
        todoCount={todoCount}
        selected={prop.selected}
        changeSelected={prop.changeSelected}
        deleteCompleted={deleteCompleted}
      />
    </div>
  )
}

export default Main
