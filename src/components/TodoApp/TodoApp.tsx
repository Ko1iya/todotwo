import Header from "../Header/Header"
import Main from "../Main/Main"
import styles from "./todoApp.module.css"

interface TodoAppProps {}

function TodoApp(prop: TodoAppProps) {
  return (
    <section className={styles.todoApp}>
      <Header />
      <Main />
    </section>
  )
}
export default TodoApp
