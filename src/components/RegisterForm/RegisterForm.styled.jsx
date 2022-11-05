import styled from 'styled-components';

export const Form = styled.form`
  width: 340px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

export const Input = styled.input`
  height: 30px;
`;

export const Button = styled.button`
  padding: ${p => p.theme.space[1]}px ${p => p.theme.space[2]}px;
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
