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

export const Module = styled.div`
  margin: 10px;
  padding: 10px;

  border: ${props => props.theme.colors.primary} solid 2px;
  border-radius: 5px;
`;

export const AddModuleButton = styled.span`
  cursor: pointer;

  align-self: center;
`;