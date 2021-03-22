export const getToken = () => {
    return window.localStorage.getItem('token')
}

export const setToken = (data) => {
    return window.localStorage.setItem('token', data)
}

export const deleteToken = () => {
    return window.localStorage.removeItem('token')
}
