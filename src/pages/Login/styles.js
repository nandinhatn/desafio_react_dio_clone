import styled from "styled-components";




export const Container = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: space-around;

height:500px;
`

export const ContainerLeft = styled.div`
font-size: 32px;
max-width:568px;
`
export const ContainerRight = styled.div`
display: flex;
flex-direction: column;
font-size: 18px;
max-width:400px;


`
export const TextH1 = styled.h1`
font-size: 32px;


`
export const FormPage = styled.form`
margin-top: 20px;
`
export const ContainerPassword = styled.div`
display:flex;
align-items: center;
justify-content: space-between;
margin-top:50px;
width:100%;

`
export const TextAccount = styled.div`
font-size: 14px;
color: ${({props})=> props==="forgot" ? '#E5E044': '#23DD7A'}
`