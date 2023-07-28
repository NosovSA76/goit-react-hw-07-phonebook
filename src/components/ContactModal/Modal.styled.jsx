import styled from 'styled-components';

export const CloseBtn = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: none;
  border: ${props => props.theme.borders.none};
  outline: none;

  box-shadow: ${props => props.theme.shadows.boxShadow};
  transition: all 0.2s ease-in-out;

  background-color: ${props => props.theme.colors.background};

  color: ${props => props.theme.colors.black};
  text-shadow: ${props => props.theme.shadows.textShadow};

  cursor: pointer;

  &:hover,
  &:focus {
    box-shadow: inset -1px -1px 1px #ffffff, inset 1px 1px 1px #8e9aaf;

    svg {
      fill: ${p => p.theme.colors.primary};
      stroke: ${p => p.theme.colors.black};
    }
  }

  &:active {
    background-color: ${p => p.theme.colors.accent};
    svg {
      fill: ${p => p.theme.colors.black};
      stroke: ${p => p.theme.colors.white};
    }
  }
`;

export const ModalPictureWrapper = styled.div`
  max-width: 100%;
  width: 420px;
  height: 360px;
  object-fit: cover;
  object-position: center;
`;
export const ModalPicture = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;
export const PictureDescr = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding-top: ${p => p.theme.space[2]}px;
  padding-bottom: ${p => p.theme.space[2]}px;
  padding-left: ${p => p.theme.space[2]}px;
  padding-right: ${p => p.theme.space[2]}px;
  width: 100%;
  height: auto;
`;

export const Button = styled.button`
display: inline-flex;
align-items: center;
justify-content: center;
gap: ${props => props.theme.space[2]}px;
cursor: pointer;
margin: ${props => props.theme.space[3]}px ${props => props.theme.space[3]}px;
width: 120px;
background: ${props => props.theme.colors.backnorm};
text-transform: capitalize;
padding: ${props => props.theme.space[3]}px ${props => props.theme.space[3]}px;
border-radius: ${props => props.theme.radii.medium};
box-shadow: -1px -1px 1px #fff, 1px 1px 1px #babecc;
&:hover {
    border: ${props => props.theme.borders.normal};
    background: ${props => props.theme.colors.backhover};
    box-shadow: inset -1px -1px 4px #ffffff, inset 1px 1px 5px #ceced1;
  } 
  &:active {
    box-shadow: 5px 5px #666;
    transform: translateY(4px);
  } 
`;

export const ContactDetailsItens = styled.div`
`

export const TitleContactDetails = styled.p`
  display: inline-block;
  margin: 10px;
  width: 120px;

`
export const ContactDetails = styled.span`
  display: inline;
  margin-left: 20px;
`
export const ContactDetailsChanged = styled.input`
padding: 0;
border: none;
  display: inline;
  margin-left: 20px;
`


export const customStyles = {
  overlay: {
    backgroundColor: 'rgba(142,154,175, 0.3)',
    zIndex: 1300,
  },
  content: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    zIndex: '1200',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: '100%',
    width: '420px',
    height: 'auto',
    boxShadow: '2px 2px 2px #0f0f0f',
    border: 'none',
    borderRadius: 'none',
  },
};
