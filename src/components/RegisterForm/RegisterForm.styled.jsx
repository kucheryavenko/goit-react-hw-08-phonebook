import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Form = styled.form`
  width: 340px;
  margin: 0 auto;
`;

export const Title = styled.h2`
  margin-bottom: 20px;
  text-align: center;

  font-weight: 400;
  font-size: 24px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

export const Input = styled.input`
  height: 30px;
  margin-top: 4px;
`;

export const Button = styled.button`
  width: 340px;
  margin-bottom: 20px;
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

export const Txt = styled.p`
  font-size: 16 px;
  text-align: center;
  color: ${p => p.theme.colors.primaryAccent};
`;

export const Link = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  color: ${p => p.theme.colors.hover};
`;
