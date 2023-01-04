import React from 'react';
import styles from "./App.module.css"
import UserList from './components/UserList';

const App:React.FC =()=>{
 
  

  return(
   
    <div className={styles.btnblock}>
      <div>Test</div>
      <UserList/>
    </div>
   
   
    
  )
}

export default App;
