import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-center: center;
margin-top:32px;
`
export const ContainerInner = styled.div`
display:flex;
margin-left: 10px;
flex-direction: column;
gap: 10px;
justify-content: center;
margin-bottom: 16px;
margin-top:5px;

`
export const NameUser = styled.div`
font-size:18px;

`
export const UserImg = styled.img`
border: 3px solid #FFFFFF;
border-radius : 50%;
width: 42px;
height: 42px;

`
export const ProgressBar= styled.div`
width: 137px;
height: 6px;
background-color: #FFFFFF;
border-radius : 6px;
position: relative;
&::after {
    content:'';
    position: absolute;
    height: 6px;
    top:0;
    width:${({percentual})=> percentual}%;
    border-radius: 6px;
    left:0;    
    background-color: #23DD7A;
}
`
