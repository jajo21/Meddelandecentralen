export function getUser() {
    if (localStorage.getItem('user') !== null || undefined) {
        let user = localStorage.getItem('user');
        return user;
    } else {
        return '';
    }
}

export function saveUser(user) {
    localStorage.setItem('user', user);
}

export function removeUser() {
    localStorage.removeItem('user');
}