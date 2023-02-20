import React from 'react'
import {BackgroundImage,ContainerCard,FeedPicture,FeedTitles, FeedTitleh2, FeedText, ContainerInner, NameUser, Texts, TextsBold, TextViews, TextDescription} from './styles'
import {FiThumbsUp} from 'react-icons/fi'
const Card =({imgBackground, feedTitle , imgUser, nomeProjeto, name_user, timeText, project_description, skills, views}) => {
  return (<>
  <ContainerCard>
    <BackgroundImage src={imgBackground}/>
    <ContainerInner>
    <FeedText>

      <FeedPicture src={imgUser}/>
      <div>
      <NameUser>{name_user}
      </NameUser>
      <Texts>{timeText}</Texts>
      </div>
     
 
    </FeedText>
   
    <FeedTitles>{feedTitle}</FeedTitles>
    <FeedTitleh2>{nomeProjeto}</FeedTitleh2>
    <TextDescription>{project_description}</TextDescription>
    <TextsBold>{skills}</TextsBold>
    <TextViews><div><FiThumbsUp/></div><div>{views}</div></TextViews>
    </ContainerInner>
  </ContainerCard>
  </>
    
  )
}
export {Card}
