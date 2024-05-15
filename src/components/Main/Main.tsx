import Footer from "../Footer/Footer"
import TodoList from "../TodoList/TodoList"
import styles from "./main.module.css"

interface MainProps {}

function Main(prop: MainProps) {
  return (
    <div className={styles.main}>
      <TodoList />
      <Footer />
    </div>
  )
}

export default Main
