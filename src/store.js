import { createStore } from 'redux';

const initState = {
    list: [],
    lastTransaction: null,
    ui: {
        loading: true,
        redirectToSuccess: false
    }
};

const reducer = (state = initState, action) => {

    switch(action.type) {

        case 'SET_ADDRESSES':
            var addresses = action.payload;
            for(var i=0; i<addresses.length; i++) {
                addresses[i].balance = addresses[i].balance.slice(0,4); // Simplified balance values for simplicity's sake
            }
            return {...state, list: action.payload, ui: {loading: false, redirectToSuccess: false}}

        case 'PROCESS_TRANSACTION':
            var newList = state.list.slice();
            for(var j=0; j<state.list.length; j++) {
                if(state.list[j].account === action.payload.origin) {
                    newList[j].balance -= action.payload.amount;
                } else if (state.list[j].account === action.payload.destionation) {
                    newList[j].balance += action.payload.amount;
                }
            }
            return {...state, list: newList, lastTransaction: action.payload, ui: {loading: false, redirectToSuccess: true}}

        default:
            return {...state}
    }
}

export const store = createStore(reducer);