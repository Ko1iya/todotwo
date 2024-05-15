import React, { Component } from "react" // Импортируем React и Component
import ButFilter from "../ButFilter/ButFilter"
import styles from "./footer.module.css"

interface FooterProps {}
interface StateI {
  selected: string
}

class Footer extends Component<FooterProps, StateI> {
  constructor(props: FooterProps) {
    super(props)
    this.state = {
      selected: "start",
    }
  }

  handlerСhangeSelected = (newState: string) => {
    this.setState(({ selected }) => {
      return { selected: newState }
    })
  }

  render() {
    const { selected } = this.state

    return (
      <div className={styles.footer}>
        <span className={styles.todoCount}>1 items left</span>
        <ul className={styles.filters}>
          <ButFilter
            handlerClass={
              selected == "start" || selected == "All" ? styles.selected : ""
            }
            handlerСhangeSelected={this.handlerСhangeSelected}
          >
            All
          </ButFilter>
          <ButFilter
            handlerClass={selected == "Active" ? styles.selected : ""}
            handlerСhangeSelected={this.handlerСhangeSelected}
          >
            Active
          </ButFilter>
          <ButFilter
            handlerClass={selected == "Completed" ? styles.selected : ""}
            handlerСhangeSelected={this.handlerСhangeSelected}
          >
            Completed
          </ButFilter>
        </ul>
        <button className={styles.clearCompleted}>Clear completed</button>
      </div>
    )
  }
}

export default Footer
