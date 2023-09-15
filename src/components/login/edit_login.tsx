import { useNavigate } from "react-router-dom"
import { ChangeEvent, FormEvent, useState } from "react"
import { PostResgisterAccess } from "../../services/user"
import { Link } from 'react-router-dom'
import { Box, Button, Form, H1, Input } from "./style"

interface Props{
    name: string
    email: string
    password: string
}

const EditLogin = () =>{ 
    const navigate = useNavigate()
    const [userValues, setUserValues] = useState<Props>({
        name: '',
        email: '',
        password: '',
    })

    const handleUserChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { value, name } = event.target
        setUserValues({
            ...userValues,
            [name]: value
        })
    }

    const handleFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        PostResgisterAccess(userValues)
        navigate('/trello')
    }
        
    return(
        <Box>
            <H1>
                <h1>Arnia Trello</h1>
            </H1>
            <Form onSubmit={handleFormSubmit}>
            <Input>
                    <label htmlFor='email'>Nome Completo</label>
                    <input 
                        type="text"
                        required 
                        name="name"
                        placeholder="Digite seu nome completo"
                        value={userValues.name}
                        onChange={handleUserChange}
                    />
                </Input>
                <Input>
                    <label htmlFor='email'>E-mail</label>
                    <input 
                        type="email"
                        required 
                        name="email"
                        placeholder="Digite seu e-mail"
                        value={userValues.email}
                        onChange={handleUserChange}
                    />
                </Input>
                <Input>
                    <label htmlFor="password">Senha</label>
                    <input 
                        type="password" 
                        required 
                        name="password" 
                        placeholder="Digite sua senha"
                        value={userValues.password}
                        onChange={handleUserChange}
                    />
                </Input>
                <Input>
                    <label htmlFor="password">Repita sua senha</label>
                    <input 
                        type="password" 
                        required 
                        name="password" 
                        placeholder="Digite sua senha"
                        value={userValues.password}
                        onChange={handleUserChange}
                    />
                </Input>
                <Button>
                    <button type="submit">ENTRAR</button>
                    <Link to="/cadastro">Cadastre-se</Link>
                </Button>
            </Form>
        </Box>
    )
}

export default EditLogin