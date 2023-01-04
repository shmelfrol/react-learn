import React from 'react';
import styles from "./App.module.css"
import { Counter } from './components/Counter';
import { TodoList } from './components/TodoList';
import UserList from './components/UserList';

const App:React.FC =()=>{
 
  

  return(
   
    <div className={styles.btnblock}>
      <div>Test</div>
      <UserList/>
     <Counter />
     <hr></hr>
     <TodoList/>
    </div>
   
   
    
  )
}

export default App;
