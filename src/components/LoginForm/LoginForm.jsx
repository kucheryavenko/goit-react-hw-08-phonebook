import { Form, Title, Label, Input, Button } from './LoginForm.styled';

export const LoginForm = () => {
  return (
    <Form>
      <Title>Log in to Contact Manager</Title>
      <Label>
        Email
        <Input type="email" name="email" autoFocus />
      </Label>
      <Label>
        Password
        <Input type="password" name="password" />
      </Label>
      <Button type="submit">Login</Button>
    </Form>
  );
};
