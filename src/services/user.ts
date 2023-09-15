import { isAxiosError } from 'axios'
import api from './config'


export async function PostLoginAccess({ email, password }:LoginParameter){
    try{
        const response = await api.post('/api/user/login', {
            email,
            password
        })
        const token = response.data.token
        const result = response.data
        localStorage.setItem("token", token)
        return result
    }catch (error){
        if(isAxiosError(error)){
            console.log(error.response?.status)
            if(error.response?.status === 401){
                throw new Error ("Senha incorreta")
            }
            if(error.response?.status === 404){
                throw new Error ("Usuário não encontrado")
            }       
        }
        throw new Error ("Ocorreu um erro em nossos servidores, tente novamente mais tarde")
    }
}

export async function PostResgisterAccess({ name, email, password }:RegisterParameter) {
    try{
        const response = await api.post('/api/user/login', {
            name,
            email,
            password
        })
        const token = response.data.token
        const result = response.data
        localStorage.setItem("token", token)
        return result
    }catch (error){
        if(isAxiosError(error)){
            if(error.response?.status === 401){
                throw new Error ("Senha incorreta") 
            }
            if(error.response?.status === 404){
                throw new Error ("Usuário não encontrado")
            }
        }
        throw new Error ("Ocorreu um erro em nossos servidores, tente novamente mais tarde")
    }
}