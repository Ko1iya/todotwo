import styles from "./header.module.css"

interface HeaderProps {}

function Header(prop: HeaderProps) {
  return (
    <div className={styles.header}>
      <h1>todos</h1>
      <input
        className={styles.newTodo}
        placeholder='What needs to be done?'
        autoFocus
      />
    </div>
  )
}

export default Header
