import {
    Container,
    InputContainer,
    LeftContainer,
    Form,
    RightContainer,
    Title,
    Link
} from "./styles"

import Logo from '../../assets/Logo 1.svg'
import { Button } from "../../components/Button"
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { toast } from "react-toastify";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";


export function Login() {
    const navigate = useNavigate();

    const schema = yup.object({
        email: yup.string()
            .email("Digite um Email Valido!")
            .required("O E-mail é Obrigatório!!"),

        password: yup.string()
            .min(6, 'A Senha deve ter pelo menos 6 digitos!')
            .required('Digite uma senha'),

    }).required();

    const {
        register,
        handleSubmit,
        formState: { errors }
    }
        = useForm({
            resolver: yupResolver(schema)
        });

    const onSubmit = async data => {
         
        // Exibe a mensagem de pending antes de iniciar a requisição
    const pendingToast = toast.loading('Verificando os seus dados...');
    
        try {
            
            const { data: {token}, status  } = await api.post('/session', {
                email: data.email,
                password: data.password,
                
            },
                {
                    validateStatus: () => true,
                }
            )
            // Finaliza a mensagem de pending
        toast.dismiss(pendingToast); // Remove a mensagem de pending
        
            if (status === 200 || status === 201) {
                setTimeout(() => {
                    navigate('/');
                }, 2000);
                localStorage.setItem('token', token)
                toast.success('Seja Bem-vindo(a) 🤌🏼')
            }else if(status === 401){
                toast.error('Email ou senha Incorretos! 🤯')
            }else{
                throw new Error()
            }
            console.log(token);
            
        } catch (error) {
            toast.error('😢 Falha no Sistema! Tente novamente')
            setTimeout(() => {
                navigate('/');
            }, 2000);
            // Finaliza a mensagem de pending
        toast.dismiss(pendingToast); // Remove a mensagem de pending
        }
       
    }


    return (
        <div>
            <Container>
                <LeftContainer>
                    <img src={Logo} alt="Logo-DevBurger" />
                </LeftContainer>
                <RightContainer>
                    <Title>
                        Olá, seja bem vindo ao <span>Dev Burguer!</span>
                        <br></br>
                        Acesse com seu <span>Login e senha.</span>
                    </Title>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <InputContainer>
                            <label>Email</label>
                            <input type="email" {...register("email")} />
                            <p>{errors?.email?.message}</p>
                        </InputContainer>

                        <InputContainer>
                            <label>Senha</label>
                            <input type="password" {...register("password")} />
                            <p>{errors?.password?.message}</p>
                        </InputContainer>
                        <Button type="submit" >Entrar</Button>
                    </Form>
                    <p>
                        Não possui conta? <Link to="/cadastro">Clique aqui.</Link>
                    </p>
                </RightContainer>
            </Container>
        </div>
    )
}