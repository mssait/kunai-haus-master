import Cookies from 'js-cookie';
export const hasRole = (userRoles, roles) => userRoles.filter(role => roles.indexOf(role) > -1).length > 0
export const roleCheck = (userRoles, roles) => !roles || hasRole(userRoles, roles)
export const getAuth = () => Cookies.get('Kunai-Haus-auth')
export const getRoles = () => [localStorage.role]
export const logout = () => {
    clearAuth()
    clearAuthLocalStorage()
}
export const clearAuthLocalStorage = () => {
    localStorage.removeItem('name')
    localStorage.removeItem('phone')
    localStorage.removeItem('email')
    localStorage.removeItem('role')
}
export const isLoggedIn = () => Boolean(getAuth())
export const clearAuth = () => {
    Cookies.remove('Kunai-Haus-auth')
}
export const getHomePage = () => {
    switch (localStorage.role) {
        case "Admin":
            return "/admin";
        case 'User':
            return "/dashboard"
    }
}
export const getName = () => localStorage.name
export const isAdmin = () => isLoggedIn() && localStorage.role === 'Admin'
export const isUser = () => isLoggedIn() && localStorage.role === 'User'
