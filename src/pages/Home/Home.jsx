import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';
import { Container, Title, Txt, Link } from './Home.styled';

const Home = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <Container>
      <Title>Hello, I am your Contact Manager!</Title>
      {!isLoggedIn && (
        <Txt>
          To work with contacts, <Link to="/register"> register </Link> or{' '}
          <Link to="/login"> log in</Link>.
        </Txt>
      )}
    </Container>
  );
};

export default Home;
