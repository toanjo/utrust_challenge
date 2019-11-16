export const setAddresses = (data) => ({
    type: 'SET_ADDRESSES',
    payload: data
})

export const handleError = () => ({
    type: 'HANDLE_ERROR',
})

export const processTransaction = (data) => ({
    type: 'PROCESS_TRANSACTION',
    payload: data
})

export const resetUI = () => ({
    type: 'RESET_UI',
})