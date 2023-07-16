import { useDispatch, useSelector } from "react-redux";
 
import { deposit, withdraw } from "./../store/actions/bank-actions";
function Bank() {
  const state = useSelector((state) => state.bank);
  console.log(state)
  const dispatch = useDispatch();
  return (
    <>
      <h1> Your Account Balance : {state}</h1>
      <button className="btn btn-outline-primary" onClick={() => dispatch(withdraw(100))}>withdraw</button>
      <button className="btn btn-outline-info mx-2" onClick={() => dispatch(deposit(200))}>withdraw</button>
      
    </>
  );
}

export default Bank;
