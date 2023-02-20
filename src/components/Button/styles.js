import styled, {css}  from 'styled-components';

export const ButtonContainer = styled.button`
    background: #565656;
    border-radius: 22px;
    position: relative;
    color: #FFFFFF;
    padding: 2px 12px;
    min-width: 120px;
    margin-left:20px;
    cursor:pointer;
    border:0;
    &:hover{
        opacity:0.9;
    }
    
    
    ${({variant}) => variant !== "primary" && css`
        min-width: 167px;
        height: 33px;
        margin-top:20px;
        width:100%;
        margin-left:0;
        cursor:pointer;
     
        
        background: #E4105D;
}
        &:hover{
            opacity:0.8;
        }
        &::after {
            content: '';
            position: absolute;
            border: 1px solid #E4105D;
            top: -5px;
            left: -6px;
            width: calc(100% + 10px);
            height: calc(100% + 10px);
            border-radius: 22px;
        }
    `}
`