import { Form, Title, Label, Input, Button } from './RegisterForm.styled';

export const RegisterForm = () => {
  return (
    <Form>
      <Title>Register to Contact Manager</Title>
      <Label>
        Name
        <Input type="text" name="name" />
      </Label>
      <Label>
        Email
        <Input type="email" name="email" />
      </Label>
      <Label>
        Password
        <Input type="password" name="password" />
      </Label>
      <Button type="submit">Register</Button>
    </Form>
  );
};
