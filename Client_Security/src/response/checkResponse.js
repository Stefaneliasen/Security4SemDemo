export const checkResponseLogin = (res) => {
    if(typeof res === 'object') {
        return res;
    } else {
        window.localStorage.setItem('auth', res);
    }
}