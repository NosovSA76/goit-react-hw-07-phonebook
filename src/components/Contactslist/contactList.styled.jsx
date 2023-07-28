import { styled, keyframes } from "styled-components";

const vibrateAnimation = keyframes`
  0% {
    transform: translateX(0);
  }
  25% {
    transform: translateY(-2px) rotate(-2deg);
  }
  50% {
    transform: translateY(2px) rotate(2deg);
  }
  75% {
    transform: translateY(-2px) rotate(-2deg);
  }
  100% {
    transform: translateY(0) rotate(0);
  }
`;


export const ContactListContainer = styled.ul`
`
export const ContactListItem = styled.li`
display: flex;
width: 560px;
margin: ${props => props.theme.space[4]}px auto;
justify-content: space-between;
` 
export const AvatarBlok = styled.div`
display: block;
margin: 0 10px 0 0;
width: 48px;
align-items: center;
cursor: pointer;`

export const Avatar = styled.img`
display: block;
margin: 0 10px 0 0;
width: 48px;
align-items: center;
`

export const ContactsName = styled.p`
display: flex;
margin: 0;
width: ${props => props.theme.space[7]}px;
align-items: center;
`
export const ContactsPhone = styled.a`
margin: 0;
display: flex;
width: ${props => props.theme.space[7]}px;
align-items: center;
  & .fade-effect {
    transition: transform 0.5s;
    animation-play-state: paused;
  }
  
  &:hover .fade-effect {
    transform: rotate(-360deg);
    animation: ${vibrateAnimation} 0.3s infinite;
  }
}
`
export const DeleteContacts = styled.button`
cursor: pointer;
color: red;
font-weight: ${props => props.theme.fontWeights.semiBold};
width: ${props => props.theme.space[7]}px;
background: ${props => props.theme.colors.backnorm};
text-transform: capitalize;
padding: ${props => props.theme.space[3]}px ${props => props.theme.space[3]}px;
border-radius: ${props => props.theme.radii.medium};
box-shadow: -1px -1px 1px #fff, 1px 1px 1px #babecc;
&:hover, &:focus {
    color: white;
    border: ${props => props.theme.borders.normal};
    background: ${props => props.theme.colors.backhoverSecond};
    box-shadow: inset -1px -1px 4px #ffffff, inset 1px 1px 5px #ceced1;
  } 
  &:active {
    box-shadow: 5px 5px #666;
    transform: translateY(4px);
  } 
`
export const Info = styled.div`
  padding-top: ${p => p.theme.space[3]}px;
  padding-bottom: ${p => p.theme.space[3]}px;
  padding-left: ${p => p.theme.space[4]}px;
  padding-right: ${p => p.theme.space[4]}px;
  text-align: center;
`;
