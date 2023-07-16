import { DEPOSIT, WITHDRAW } from "../actions/bank-actions";

const bankReducer = (state = 2000, action) => {
  switch (action.type) {
    case DEPOSIT:
      return state + parseInt(action.payload);
case WITHDRAW:
      return state - parseInt(action.payload);

    default:
      return state;
  }
};


export default bankReducer;
