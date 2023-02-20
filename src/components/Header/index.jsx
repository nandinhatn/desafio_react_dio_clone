import React from 'react'
import {HeaderContainer, HeaderButtons} from './styles'
import Logo from '../../assets/logo-dio.png'
import { Button } from '../Button'
import { useNavigate } from 'react-router-dom'


const Header =()=> {
    const navigate = useNavigate();
const handleClickSignIn =()=>{
    navigate('/login')
}
const handleClickSign =()=>{
  navigate('/sign')

}
  return (<>
  <HeaderContainer>
    <div><img src={Logo}></img></div>
    <div>
        <a>HOME</a>
        <Button variant="primary" onClick={handleClickSignIn} title="Entrar" />
    <Button variant="primary"  onClick={handleClickSign} title="Cadastrar"/></div>
    
  </HeaderContainer>
  </>
   
  )
}
export {Header}
