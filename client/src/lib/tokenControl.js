export const getToken = () => {
    return window.localStorage.getItem('token')
}

export const deleteToken = () => {
    return window.localStorage.removeItem('token')
}
