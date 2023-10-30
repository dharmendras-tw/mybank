const initialState = { balance: 0};

function balanceReducer(state = initialState, action) {
  switch(action.type) {
    case 'deposit': {
        return { 
            ...state,
            balance: state.balance + action.payload
         };
    }
    default:
      return state;
  }
}

export default balanceReducer;