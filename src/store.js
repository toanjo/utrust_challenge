import { createStore } from 'redux';

const initState = {
    list: [],
    lastTransaction: null,
    ui: {
        loading: true,
        error: false,
        redirectToSuccess: false,
        copied: false
    }
};

const reducer = (state = initState, action) => {

    switch(action.type) {

        // For simple value changes on the state
        case 'SET_VALUE':
            return {
                ...state,
                ui: {
                    ...state.ui,
                    [action.payload.field]: action.payload.value
                }
            }

        // After successfully fetching the data
        case 'SET_ADDRESSES':
            var addresses = action.payload;
            for(var i=0; i<addresses.length; i++) {
                addresses[i].balance = +addresses[i].balance.slice(0,4); // Simplified balance values for simplicity's sake
            }
            return {...state, list: action.payload, ui: {...state.ui, loading: false, error: false}}

        // UI state changes for error case
        case 'HANDLE_ERROR':
            return {...state, ui: {...state.ui, loading: false, error: true}}

        // UI state changes for when the logo is clicked
        case 'RESET_UI':
            return {...state, ui: {...state.ui, redirectToSuccess: false, copied: false}}

        // Change state according to requested transaction
        case 'PROCESS_TRANSACTION':
            var newList = state.list.slice();
            for(var j=0; j<state.list.length; j++) {
                if(state.list[j].account === action.payload.origin) {
                    newList[j].balance -= +action.payload.amount;
                } if (state.list[j].account === action.payload.destination) {
                    newList[j].balance += +action.payload.amount;
                }
            }
            return {...state, list: newList, lastTransaction: action.payload, ui: {...state.ui, redirectToSuccess: true}}

        default:
            return {...state}
    }
}

export const store = createStore(reducer);