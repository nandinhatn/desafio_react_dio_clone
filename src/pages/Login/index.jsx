import React from 'react'
import { Link } from 'react-router-dom'
import { Header } from '../../components/Header';
import {Container, ContainerLeft,ContainerRight,TextH1, FormPage, ContainerPassword,TextAccount} from './styles'
import { Input } from '../../components/Input';
import {MdEmail, MdLock} from 'react-icons/md';
import { Button } from '../../components/Button';
import { useNavigate } from 'react-router-dom';
import {useForm} from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";


const schema = yup.object({
  email: yup.string().email('email invalido').required('campo obrigatorio'),
  password: yup.string().min(3,'no minimo 3 caracteres').required('campo obrigatorio'),
}).required();


const Login =() => {
 
  const navigate = useNavigate();

  const handleNavigate = ()=>{
    console.log('click')
    navigate('/feed')
  }
  const { control, handleSubmit,  formState: { errors} } = useForm({
    
    resolver: yupResolver(schema),
    mode:'change'
  });
  console.log(errors)
  const onSubmit = data => console.log('aqui',this.state.data);

  return (<>
 <Header/>
 <Container>
  <ContainerLeft>
  A plataforma para você aprender com experts, dominar as
   principais tecnologias e entrar mais rápido nas empresas mais desejadas.

  </ContainerLeft>
  
  <ContainerRight>
  <TextH1>Faça seu Cadastro </TextH1>
  Faça seu login e make the change._

  <FormPage onSubmit={handleSubmit(onSubmit)}>

    
    
    <Input control={control}  name="email"placeholder="email" leftIcon={<MdEmail/>}></Input>
    <Input control={control} name="password "placeholder="Senha" type="password" leftIcon={<MdLock/>}></Input>
    <Button title="Entrar" type="submit"/>
  </FormPage>
 <ContainerPassword>
  <TextAccount props="forgot">Esqueci a senha</TextAccount>
  <TextAccount>Criar Conta</TextAccount>
 </ContainerPassword>
  </ContainerRight>
 </Container>
  
  </>
    
  )
}
export {Login}
