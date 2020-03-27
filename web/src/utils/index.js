const TOKEN_KEY = 'PROUD2BFIVESYS';

export const login = () => {
    localStorage.setItem(TOKEN_KEY, 'TestLogin');
}

export const logout = () => {
    localStorage.removeItem(TOKEN_KEY);
}

export const isLogin = () => {
    if (localStorage.getItem('username')) {
        return true;
    }

    return false;
}