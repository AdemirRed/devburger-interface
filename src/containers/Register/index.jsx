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


export function Register() {

    const navigate = useNavigate();

    const schema = yup.object({
        name: yup
        .string()
        .required('O nome é Obrigatório'),
        email: yup.string()
        .email("Digite um Email Valido!")
        .required("O E-mail é Obrigatório!!"),
        password: yup.string()
        .min(6, 'A Senha deve ter pelo menos 6 digitos!')
        .required('Digite uma senha'),
        confirmPassword: yup
        .string()
        .oneOf([yup.ref('password')], 'As senhas devem ser iguais')
        .required(),

      }).required();
    
      const { 
        register,
        handleSubmit,
        formState:{ errors } 
    } 
        = useForm({
        resolver: yupResolver(schema)
      });

      const onSubmit = async (data) => {
        try {
            const { status } = await api.post('/users', {
                name: data.name,
                email: data.email,
                password: data.password,
            },
        {
            validateStatus: () => true,
        },
        )
        if (status === 200 || status === 201){
            setTimeout(() => {
                navigate('/login')
            }, 2000);
            
            toast.success('Conta criada com sucesso!')
        }else if(status === 409){
            toast.error('Email já cadastrado!')

            setTimeout(() => {
                toast.info('Faça o login para continuar');
              }, 2500); // 2500 milissegundos = 2,5 segundo
        }else{
            throw new Erros()
        }

        } catch (error) {
            toast.error('😢 Falha no Sistema! Tente novamente')
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
                        Criar Conta
                    </Title>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                    <InputContainer>
                            <label>Nome</label>
                            <input type="string" {...register("name")}/>
                            <p>{errors?.name?.message}</p>
                        </InputContainer>

                        <InputContainer>
                            <label>Email</label>
                            <input type="email" {...register("email")}/>
                            <p>{errors?.email?.message}</p>
                        </InputContainer>

                        <InputContainer> 
                            <label>Senha</label>
                            <input type="password" {...register("password")}/>
                            <p>{errors?.password?.message}</p>
                        </InputContainer>

                        <InputContainer> 
                            <label>Confirmar senha</label>
                            <input type="password" {...register("confirmPassword")}/>
                            <p>{errors?.confirmPassword?.message}</p>
                        </InputContainer>
                        <Button type="submit" >Criar Conta</Button>
                    </Form>
                    <p>
                        Já possui conta? <Link to="/login">Clique aqui.</Link>
                    </p>
                </RightContainer>
            </Container>
        </div>
    )
}