import { NavLink } from 'react-router-dom'
import styles from "./SearchBlock.module.css"

export default function SearchBlock() {
  return (
    <NavLink
    to="/search"
    className={({ isActive }) => 
      isActive ? `${styles.button} ${styles.active}` : styles.button
    }
  >
    Поиск
  </NavLink>
  )
}
