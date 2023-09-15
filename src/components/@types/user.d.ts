interface LoginParameter {
    email: string
    password: string
}

interface RegisterParameter {
    name: string
    email: string
    password: string
}
  
interface LoginResult {
    token: string
    name: string
}