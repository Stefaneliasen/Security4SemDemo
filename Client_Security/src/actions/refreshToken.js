export const HANDLE_LOGIN = "HANDLE_LOGIN";
export const HANDLE_LOGOUT = "HANDLE_LOGOUT";

export const handleLogin = () => {
    return {
        type: HANDLE_LOGIN
    }
}

export const handleLogOut = () => {
    return {
        type: HANDLE_LOGOUT
    }
}