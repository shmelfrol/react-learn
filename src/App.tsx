import React from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import styles from "./App.module.css"

const App:React.FC =()=>{
  const dispatch = useDispatch
  const cash = useSelector(state=>state.cash)
  
  
  return(
    <>
    <div className={styles.btnblock}>
      <button className={styles.btn}>Снять</button>
      <button className={styles.btn}>Положить</button>
    </div>
    <div>{cash}</div>
    </>
    
  )
}

export default App;
