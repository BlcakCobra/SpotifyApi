import styles from './FirstBlock.module.css';
import Button from './Button/Button';
import SearchBlock from './SearchBlock/SearchBlock';



export default function FirstBlock() {
  return (
    <div className={styles.First}>
      <Button/>
      <SearchBlock/>
    </div>
  )
}
