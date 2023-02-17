const user = {
    email: "admin@lendsqr.com",
    password: "12345"
}

export const loginUser = async (email: string, password: string) => {
    if (email !== user.email && password !== user.password) {
        return alert("invalid details")
    } else if (email !== user.email && password === user.password) {
        return alert("invalid details")
    } else if (email === user.email && password !== user.password) {
        return alert("invalid details")
    } else if (email === user.email && password === user.password) {
        window.localStorage.setItem('firstLogin', 'true')
    }
}