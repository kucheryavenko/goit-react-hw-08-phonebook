import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  min-height: calc(100vh - 200px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  margin-bottom: 20px;
  font-weight: 500;
  font-size: 48px;
  text-align: center;
`;

export const Txt = styled.p`
  font-size: 20px;
  text-align: center;
  color: ${p => p.theme.colors.primaryAccent};
`;

export const Link = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  color: ${p => p.theme.colors.hover};
`;
