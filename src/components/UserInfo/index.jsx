import React from 'react'
import {Container, ContainerInner,UserImg, NameUser, ProgressBar} from './styles';

const UserInfo = ({img, name, percentual}) => {
  return (<>
  <Container>
  <UserImg src={img}/>
<ContainerInner>  
    <NameUser>{name}</NameUser>
    <ProgressBar percentual={percentual}/>
</ContainerInner >

  </Container>
  </>
    
  )
}
export {UserInfo}
