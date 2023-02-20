import React from 'react'
import { Header } from '../../components/Header'
import {Container,ContainerLeft, ContainerRight,ContainerTextLeft, ContainerTextRightH1, ContainerTextRight, Link, TextLink} from './styles'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import {MdEmail, MdLock, MdPerson} from 'react-icons/md';
const Sign = ()=> {
  return (<>
  <Header></Header>
  <Container>
    <ContainerLeft>
    <ContainerTextLeft>A plataforma para você aprender com experts, 
    dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.</ContainerTextLeft>
    </ContainerLeft>
 
 <ContainerRight>
    <ContainerTextRightH1>Comece agora grátis</ContainerTextRightH1>
  
    <ContainerTextRight>Crie sua conta e make the change._</ContainerTextRight>
    <form>
<Input name="nome" placeholder="Nome Completo" leftIcon={<MdPerson/>}/>
<Input name="email" placeholder="Email" leftIcon={<MdEmail/>}/>
<Input name="password" placeholder="Senha" leftIcon={<MdLock/>}/>
<Button title="Criar minha conta"/>
    </form>
    <ContainerTextRight>Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.</ContainerTextRight>
    
<TextLink>Já tenho conta <Link>Fazer Login</Link></TextLink>
 </ContainerRight>
  </Container>

  </>
  
  )
}
export {Sign}
