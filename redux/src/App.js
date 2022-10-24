import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { increment,decrement, signin } from './actions';

function App() {
  const counter = useSelector(state=> state.counter);
  const isLogged = useSelector(state=>state.isLogged);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>counter : {counter}</h1>
      <button onClick= {()=>dispatch(increment())}>+</button>
      <button onClick= {()=>dispatch(decrement())}>-</button>
      <br/>

      <button onClick= {()=>dispatch(signin())}>
      {isLogged ? <p>SIGN_OUT</p> : <p>SIGN_IN</p>}
      </button>


      
    </div>
  );
}

export default App;
