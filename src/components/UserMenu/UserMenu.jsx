import { useDispatch, useSelector } from 'react-redux';
import { selectName } from 'redux/auth/authSelectors';
import { logOut } from 'redux/auth/authOperations';
import { Name, Button } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(selectName);

  return (
    <div>
      <Name>{name}</Name>
      <Button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </Button>
    </div>
  );
};
