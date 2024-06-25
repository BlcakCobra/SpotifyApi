import { NavLink } from 'react-router-dom';
import styles from './Button.module.css';



export default function Button() {
  return (
        <NavLink
      to="/"
      className={({ isActive }) => 
        isActive ? `${styles.button} ${styles.active}` : styles.button
      }
    >
      Главная
    </NavLink>
  )
}
