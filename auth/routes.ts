export const publicRoutes = [
    "/",
    "/courses",
    "/courses/*",
    "/auth/new-verification",
    "/api/user"
]


export const protectedRoutes = [
    "/dashboard",
    "/profile",
    "/dashboard/create/course",
    "/accounts",
    "/",
]


export const authRoutes = [
    "/login", 
    "/register",
    "/auth/error",
    "/auth/reset-password",
    "/auth/reset-mail",
    "/auth/new-password",
]

export const apiAuthPrefix = "/api/auth"


export const DEFAULT_LOGIN_REDIRECT = "/"