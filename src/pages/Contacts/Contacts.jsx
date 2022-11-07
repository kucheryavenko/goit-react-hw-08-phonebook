import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from './Contacts.styled';
import { ContactForm } from 'components/ContactForm';
import { ContactList } from 'components/ContactList';
import { Filter } from 'components/Filter';
import { Section } from 'components/Section';
import { Title } from 'components/Title';
import { Notification } from 'components/Notification';
import { Loader } from 'components/Loader';
import {
  selectContacts,
  selectIsLoading,
  selectError,
} from 'redux/contacts/selectors';
import { fetchContacts } from 'redux/contacts/operations';

const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <Title title={'Phonebook'} />
      <ContactForm />
      <Section title={'Contacts'}>
        <Filter />
        {isLoading && !error && <Loader />}
        {contacts.length > 0 && <ContactList />}
        {contacts.length === 0 && !isLoading && (
          <Notification message="You don't have contacts yet..." />
        )}
      </Section>
    </Container>
  );
};

export default Contacts;
