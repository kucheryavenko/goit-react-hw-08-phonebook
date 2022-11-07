import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Phonebook } from 'components/Phonebook';
import { fetchContacts } from 'redux/contacts/contactsOperations';

const Contacts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return <Phonebook />;
};

export default Contacts;
