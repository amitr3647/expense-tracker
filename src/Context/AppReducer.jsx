export default (state, action) => {
  switch (action.type) {
    case "DELETE_TRANSACTION":
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== action.payload
        )
      };
    case "ADD_TRANSACTION":
      console.log(...state.transactions,action.payload);
      console.log(state);
      return {...state,transactions:[action.payload,...state.transactions]}
     
    default:
      return state;

    //transactions: state.transactions.filter(
    // (transaction) => transaction.id !== action.payload
  }
};