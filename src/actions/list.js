export const fetchList = () => ({
    type: 'FETCH_ADDRESSES'
});

export const setAddresses = (data) => ({
    type: 'SET_ADDRESSES',
    payload: data
})

export const processTransaction = (data) => ({
    type: 'PROCESS_TRANSACTION',
    payload: data
})