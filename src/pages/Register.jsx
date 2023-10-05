import { Form, useNavigate } from "react-router-dom";
import { FormInput, SubmitButton } from '../components/index';

const Register = () => {
  const navigation = useNavigate();

  const handleGoToLogin = () => {
    navigation('/login');
  };

  return (
    <section className="grid min-h-[100vh] place-items-center px-8">
      <Form
        method='POST' 
        className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4"
      >
        <h3 className="text-center text-3xl font-bold">Register</h3>
        <FormInput typy='text' label='Username' />
        <FormInput typy='text' label='Email' />
        <FormInput typy='password' label='Password' />

        <SubmitButton text='Register' />

        <p className="text-center">
          Already a member? 
          <button
            onClick={handleGoToLogin}
            className="ml-2 link-secondary"
          >
            Login
          </button>
        </p>
      </Form>
    </section>
  )
}

export default Register;
