import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 26px;
  border-bottom: 1px solid ${p => p.theme.colors.primaryAccent};
`;
