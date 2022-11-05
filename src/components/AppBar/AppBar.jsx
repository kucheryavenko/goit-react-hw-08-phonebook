import { Navigation } from 'components/Navigation/Navigation';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { Header } from './AppBar.styled';
// import { UserMenu } from 'components/UserMenu/UserMenu';

export const AppBar = () => {
  return (
    <Header>
      <Navigation />
      <AuthNav />
      {/* <UserMenu /> */}
    </Header>
  );
};
