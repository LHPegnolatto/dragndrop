import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin: 30px;
  padding: 10px;  

  background: ${props => props.theme.colors.lightBackground};
  box-shadow: 0px 0px 10px #33333354;
`;

export const AddModuleButton = styled.span`
  cursor: pointer;

  align-self: center;
  margin: 10px;
`;