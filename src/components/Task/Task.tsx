import styles from "./task.module.css"
import { formatDistanceToNow } from "date-fns"
interface TaskProps {
  children: string
  taskState?: string
  toggleTaskStateCompleted: (id: number) => void
  toggleTaskStateEditing: (id: number) => void
  id: number
  deleteTask: (id: number) => void
  changeContent: (
    e: React.ChangeEvent<HTMLInputElement>,
    idProp: number
  ) => void
  toggleEditingToActive: (
    e: React.KeyboardEvent<HTMLInputElement>,
    idProp: number
  ) => void
}

function Task(prop: TaskProps) {
  //Использую библиотеку date-fns для получения прошедшего времени в строковом формате
  const timeCreated = formatDistanceToNow(new Date(), {
    includeSeconds: true,
  })

  const {
    children,
    taskState,
    id,
    toggleTaskStateCompleted,
    deleteTask,
    changeContent,
    toggleTaskStateEditing,
    toggleEditingToActive,
  } = prop

  return (
    <li className={taskState ? styles[taskState] : undefined}>
      {taskState !== "editing" ? (
        <div className={styles.view}>
          <input
            className={styles.toggle}
            type='checkbox'
            checked={taskState === "completed" ? true : false}
            onClick={() => {
              toggleTaskStateCompleted(id)
            }}
          />
          <label>
            <span
              className={styles.description}
              onClick={() => {
                toggleTaskStateCompleted(id)
              }}
            >
              {children}
            </span>
            <span className={styles.created}>created {timeCreated}</span>
          </label>
          <button
            className={`${styles.icon} ${styles.iconEdit}`}
            onClick={() => {
              toggleTaskStateEditing(id)
            }}
          ></button>
          <button
            className={`${styles.icon} ${styles.iconDestroy}`}
            onClick={() => {
              deleteTask(id)
            }}
          ></button>
        </div>
      ) : (
        <input
          type='text'
          className={styles.edit}
          value={children}
          onChange={(e) => {
            changeContent(e, id)
          }}
          onKeyDown={(e) => {
            toggleEditingToActive(e, id)
          }}
        />
      )}
    </li>
  )
}

export default Task
