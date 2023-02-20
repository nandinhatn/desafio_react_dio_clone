import React from 'react'
import { Link } from 'react-router-dom'
import { Header } from '../../components/Header'
import {Container, ContainerLeft, ContainerRight, TextH1, TextH1Span, TextP,ContainerLeftInner} from './styles'
import Banner from '../../assets/banner.png';
import { Button } from '../../components/Button';
import { useNavigate } from 'react-router-dom';



const Home = () => {

  const navigate = useNavigate()

  const handleClickSignIn = ()=>{
    navigate('/login')

  }
  return (<>
  <Header/>  
  <Container>
    <ContainerLeft>
      <div> <TextH1>Implemente<br/>
    <TextH1Span> o seu futuro global <br/>agora!</TextH1Span> </TextH1></div>
<div><TextP>Domine as tecnologias utilizadas pelas empresas mais inovadoras
       do mundo e encare seu novo desafio profissional, evoluindo em comunidade com os melhores experts.</TextP></div>
    
     
       <Button onClick={handleClickSignIn} variant="secondary" title="Começar agora"/>
    </ContainerLeft>

    <ContainerRight><img src={Banner} /></ContainerRight>
  </Container>
 
     
  </>
  
  )
}
export {Home}
