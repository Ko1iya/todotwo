import styles from "./task.module.css"
import { formatDistanceToNow } from "date-fns"
interface TaskProps {
  children: string
  taskState?: string
  toggleTaskState: (id: number) => void
  id: number
  deleteTask: (id: number) => void
}

function Task(prop: TaskProps) {
  //Использую библиотеку date-fns для получения прошедшего времени в строковом формате
  const timeCreated = formatDistanceToNow(new Date(), {
    includeSeconds: true,
  })

  const { children, taskState, id, toggleTaskState, deleteTask } = prop

  return (
    <li className={taskState ? styles[taskState] : undefined}>
      {taskState !== "editing" ? (
        <div className={styles.view}>
          <input
            className={styles.toggle}
            type='checkbox'
            checked={taskState === "completed" ? true : false}
            onClick={() => {
              toggleTaskState(id)
            }}
          />
          <label>
            <span
              className={styles.description}
              onClick={() => {
                toggleTaskState(id)
              }}
            >
              {children}
            </span>
            <span className={styles.created}>created {timeCreated}</span>
          </label>
          <button className={`${styles.icon} ${styles.iconEdit}`}></button>
          <button
            className={`${styles.icon} ${styles.iconDestroy}`}
            onClick={() => {
              deleteTask(id)
            }}
          ></button>
        </div>
      ) : (
        <input type='text' className={styles.edit} value='Editing task' />
      )}
    </li>
  )
}

export default Task
