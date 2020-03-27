module.exports = function hasAcess(acesso, nivel, disabled) {
    const userPerms = JSON.parse(localStorage.getItem('perms'))
    const user = localStorage.getItem('username')
    console.log(userPerms)
    if (nivel && user === "a")
        return false;
    if (disabled && nivel && userPerms && userPerms[acesso] && userPerms[acesso].includes(nivel))
        return false;
    if (disabled && nivel && userPerms && userPerms[acesso] && !userPerms[acesso].includes(nivel))
        return true;
    if (user === "a")
        return true;
    if (nivel && userPerms && userPerms[acesso] && userPerms[acesso].includes(nivel))
        return true;
    if (!nivel && userPerms && userPerms[acesso])
        return true;
    if (nivel && userPerms && userPerms[acesso] && !userPerms[acesso].includes(nivel))
        return true;
    return false;
}