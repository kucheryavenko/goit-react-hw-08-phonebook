import styled from 'styled-components';

export const Name = styled.p`
  display: inline-block;
  padding: 12px;
  font-weight: 500;
`;

export const Button = styled.button`
  display: inline-block;
  padding: ${p => p.theme.space[0]}px ${p => p.theme.space[1]}px;
  font-weight: 400;

  background-color: ${p => p.theme.colors.secondary};
  border: 1px solid ${p => p.theme.colors.border};
  border-radius: ${p => p.theme.radii.s}px;
  cursor: pointer;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover {
    color: ${p => p.theme.colors.primary};
    background-color: ${p => p.theme.colors.hover};
    box-shadow: ${p => p.theme.shadows.shadow};
  }
`;
