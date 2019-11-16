// Data
export const setAddresses = (data) => ({
    type: 'SET_ADDRESSES',
    payload: data
})

export const handleError = () => ({
    type: 'HANDLE_ERROR'
})

// Transactions
export const processTransaction = (data) => ({
    type: 'PROCESS_TRANSACTION',
    payload: data
})

// UI
export const resetUI = () => ({
    type: 'RESET_UI'
})

export const copiedToClipboard = () => ({
    type: 'SET_VALUE',
    payload: {
        field: "copied",
        value: true
    }
})