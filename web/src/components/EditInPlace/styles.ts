import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

interface ModuleCustomProps {
  isDragging: Boolean
}

export const Module = styled.div<ModuleCustomProps>`
  cursor: grab;

  margin: 10px;
  padding: 10px;

  border: ${props => props.theme.colors.primary} solid 2px;
  border-radius: 5px;

  span {
    cursor: text;
  }
  input {
    color: ${props => props.theme.colors.text};
    background: transparent;
    border: 2px dashed ${props => props.theme.colors.primary};
    padding: 2px 5px;
    align-content: center;

    width: 100%;
  }

  ${props => props.isDragging && css`
    border: 2px dashed rgba(0, 0, 0, 0.3);
    cursor: grabbing !important;

    * {
      opacity: 0;
    }
  `}
`;