import React from 'react'
import {FeedContainer,ContainerLeft,ContainerRight,Title, TitleRanking} from './styles'
import { Header } from '../../components/Header'
import { Card } from '../../components/Card';
import { UserInfo } from '../../components/UserInfo';

const Feed =()=> {
  return (<>
  <Header/>
    <FeedContainer>
 <ContainerLeft>
 <Title>Feed</Title>
 <Card imgBackground={'https://programadoresbrasil.com.br/wp-content/uploads/2020/05/redes-de-computadores2-1.png'} 
 feedTitle="Projeto Dio CSS" imgUser={'https://avatars.githubusercontent.com/u/50202312?v=4'} name_user="Fernanda Nogueira" timeText="Há 8 minutos" 
 project_description="Projeto feito no curso de HTML e CSS no bootcamp da Dio" skills="#HTML #CSS #Javascript" views="10"/>
  <Card imgBackground={'https://programadoresbrasil.com.br/wp-content/uploads/2020/05/redes-de-computadores2-1.png'} 
 feedTitle="Projeto Dio CSS" imgUser={'https://avatars.githubusercontent.com/u/50202312?v=4'} name_user="Fernanda Nogueira" timeText="Há 8 minutos" 
 project_description="Projeto feito no curso de HTML e CSS no bootcamp da Dio" skills="#HTML #CSS #Javascript" views="10"/>
  <Card imgBackground={'https://programadoresbrasil.com.br/wp-content/uploads/2020/05/redes-de-computadores2-1.png'} 
 feedTitle="Projeto Dio CSS" imgUser={'https://avatars.githubusercontent.com/u/50202312?v=4'} name_user="Fernanda Nogueira" timeText="Há 8 minutos" 
 project_description="Projeto feito no curso de HTML e CSS no bootcamp da Dio" skills="#HTML #CSS #Javascript" views="10"/>


 </ContainerLeft>
<ContainerRight>
    <TitleRanking># RANKING 5 TOP DA SEMANA</TitleRanking>
    <UserInfo  name="Fernanda Nogueira" img='https://avatars.githubusercontent.com/u/50202312?v=4' percentual="50"/>
    <UserInfo  name="Maria Felizbina" img='https://blog.locaweb.com.br/wp-content/uploads/2008/12/publico-alvo-e-persona.jpg' percentual="30"/>
    <UserInfo  name="João Cortez" img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxa2NLYqdvTrCTXM3F2BodqWNeF8HOXIROhw&usqp=CAU' percentual="12"/>
    
</ContainerRight>

    </FeedContainer>
  </>
  
  )
}

export {Feed}
